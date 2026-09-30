import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { loadPostMeta, loadPostComponent, formatDate, type MDXComponent } from '../lib/blog'
import { renderInline } from '../lib/markdown'
import { MichelinStar } from '../components/MichelinStar'
import { BibGourmand } from '../components/BibGourmand'

const MDX_COMPONENTS = { MichelinStar, BibGourmand }

function PostBody({ slug }: { slug: string }) {
  const [PostComponent, setPostComponent] = useState<MDXComponent | null>(null)

  useEffect(() => {
    loadPostComponent(slug)?.then((comp) => setPostComponent(() => comp))
  }, [slug])

  return PostComponent ? <PostComponent components={MDX_COMPONENTS} /> : <p>loading…</p>
}

export default function FieldNote() {
  const { slug = '' } = useParams()
  const post = loadPostMeta(slug)

  useDocumentMeta({
    title: post ? post.title + ' — Andrew Whitely' : 'Field Notes — Andrew Whitely',
    description: post ? post.excerpt || post.title + ' — Andrew Whitely' : 'Writing by Andrew Whitely',
    url: post ? `https://aw.works/notes/${post.slug}` : 'https://aw.works/notes',
    type: 'article',
    publishedTime: post?.date,
  })

  if (!post) return <Navigate to="/404" replace />

  return (
    <Layout>
      <main className="wrap post" id="post-main">
        <div className="prompt">
          <span className="ps1">~/fieldnotes » $</span>
          <span className="cmd">cat</span>
          <span className="arg" id="post-file">{post.slug}.mdx</span>
        </div>

        <header className="post-header">
          <h1 className="post-title">{post.title}</h1>
          {post.excerpt && (
            <p
              className="post-subtitle"
              dangerouslySetInnerHTML={{ __html: renderInline(post.excerpt) }}
            />
          )}
          <div className="post-meta">
            <span className="badge badge-blog">note</span>
            <time dateTime={post.date}>{formatDate(post.date, 'long')}</time>
          </div>
        </header>

        <article className="post-body" id="post-body">
          <PostBody slug={post.slug} key={post.slug} />
        </article>

        <div className="post-nav">
          <Link to="/notes">← ~/fieldnotes</Link>
          <Link to="/">home</Link>
        </div>
      </main>
    </Layout>
  )
}
