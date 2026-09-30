import type { ComponentType } from 'react'
import postsCatalog from '../content/posts.json'

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  draft?: boolean
}

export type MDXComponent = ComponentType<{ components?: Record<string, unknown> }>

const MONTH_NAMES = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

export function formatDate(iso: string | undefined, kind?: 'short' | 'long'): string {
  if (!iso) return ''
  const p = String(iso).split('-')
  if (p.length < 2) return iso
  const month = MONTH_NAMES[parseInt(p[1], 10) - 1] || p[1]
  const year = p[0]
  const day = p[2] ? String(parseInt(p[2], 10)) : ''
  if (kind === 'short') return month + ' ' + year
  if (day) return month + ' ' + day + ', ' + year
  return month + ' ' + year
}

type FrontmatterRecord = Record<
  string,
  {
    title?: string
    date?: string
    excerpt?: string
    subtitle?: string
    tags?: string[]
    draft?: boolean
  }
>

// Front matter exported at compile time by remark-mdx-frontmatter — cheap
// to load eagerly for every post, used by listing/tag pages.
const postFrontmatter = import.meta.glob('../content/posts/*.mdx', {
  eager: true,
  import: 'frontmatter',
}) as FrontmatterRecord

// The compiled MDX component itself — loaded lazily, only when a post is
// actually visited.
const postModules = import.meta.glob('../content/posts/*.mdx') as Record<
  string,
  () => Promise<{ default: MDXComponent }>
>

function slugToPath(slug: string): string {
  return `../content/posts/${slug}.mdx`
}

function slugsFromCatalog(): string[] {
  const raw = (postsCatalog as { posts: string[] }).posts || []
  return raw.filter(Boolean)
}

export function loadPostMeta(slug: string): PostMeta | null {
  const fm = postFrontmatter[slugToPath(slug)]
  if (!fm) return null
  return {
    slug,
    title: fm.title || slug,
    date: fm.date || '',
    excerpt: fm.excerpt || fm.subtitle || '',
    tags: fm.tags || [],
    draft: fm.draft,
  }
}

export function loadPostComponent(slug: string): Promise<MDXComponent> | null {
  const importer = postModules[slugToPath(slug)]
  if (!importer) return null
  return importer().then((mod) => mod.default)
}

let cachedCatalog: PostMeta[] | null = null

export function loadCatalog(): PostMeta[] {
  if (cachedCatalog) return cachedCatalog
  const slugs = slugsFromCatalog()
  cachedCatalog = slugs
    .map((slug) => loadPostMeta(slug) || { slug, title: slug, date: '', excerpt: '', tags: [] })
    .filter((post) => !post.draft)
  return cachedCatalog
}

export interface TagCount {
  tag: string
  count: number
}

export function getAllTags(): TagCount[] {
  const counts = new Map<string, number>()
  loadCatalog().forEach((post) => {
    post.tags.forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1))
  })
  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag))
}

export function getPostsByTag(tag: string): PostMeta[] {
  return loadCatalog().filter((post) => post.tags.includes(tag))
}
