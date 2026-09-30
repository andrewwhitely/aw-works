import { loadCatalog } from './blog'

export interface CmdItem {
  label: string
  key: string
  href: string
  external?: boolean
  parent?: string
}

const BASE_ITEMS: CmdItem[] = [
  { label: 'home', key: '~', href: '/' },
  { label: 'about', key: '#', href: '/#about' },
  { label: 'experience', key: '#', href: '/#experience' },
  { label: 'education', key: '#', href: '/#education' },
  { label: 'field notes', key: '/', href: '/notes' },
  { label: 'projects', key: '/', href: '/works' },
  { label: 'photos', key: '/', href: '/photos' },
  { label: 'friends', key: '/', href: '/friends' },
  { label: 'uses', key: '/', href: '/uses' },
  { label: 'linkedin', key: '↗', href: 'https://linkedin.com/in/andrewwhitely', external: true },
  { label: 'github', key: '↗', href: 'https://github.com/andrewwhitely', external: true },
]

export function getCmdItems(): CmdItem[] {
  const posts = loadCatalog()
  const items = BASE_ITEMS.slice()
  const noteIdx = items.findIndex((i) => i.href.replace(/\/+$/, '') === '/notes')
  const insertAt = noteIdx === -1 ? items.length : noteIdx + 1
  const postItems: CmdItem[] = posts.map((p) => ({
    label: p.title,
    key: '·',
    href: '/notes/' + p.slug,
    parent: '/notes',
  }))
  items.splice(insertAt, 0, ...postItems)
  return items
}
