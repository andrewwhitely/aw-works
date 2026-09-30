import { Link, Navigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { getPostsByTag, formatDate } from '../lib/blog'

export default function TagDetail() {
  const { tag = '' } = useParams()
  const posts = tag ? getPostsByTag(tag) : []

  useDocumentMeta({
    title: tag ? `${tag} — Andrew Whitely` : 'Tags — Andrew Whitely',
    description: `Field notes tagged with ${tag}.`,
    url: `https://aw.works/notes/tags/${tag}`,
    type: 'website',
  })

  if (!tag || posts.length === 0) return <Navigate to="/404" replace />

  return (
    <Layout>
      <main className="wrap blog-page">
        <div className="prompt">
          <span className="ps1">~/fieldnotes » $</span>
          <span className="cmd">grep</span>
          <span className="arg">-l "{tag}" tags/</span>
        </div>
        <Link to="/notes/tags" className="work-page-back" style={{ marginTop: '0.75rem' }}>← All Tags</Link>

        <div style={{ marginTop: '1rem' }}>
          {posts.map((post) => (
            <Link to={`/notes/${post.slug}`} className="tag-list-item" key={post.slug}>
              <span className="tag-list-name">{post.title}</span>
              <span className="tag-list-leader" />
              <span className="tag-list-count">{formatDate(post.date, 'short')}</span>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  )
}
