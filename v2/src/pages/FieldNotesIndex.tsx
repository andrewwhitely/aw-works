import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { loadCatalog, formatDate } from '../lib/blog'
import { renderInline } from '../lib/markdown'

export default function FieldNotes() {
  const posts = loadCatalog()

  useDocumentMeta({
    title: 'Field Notes — Andrew Whitely',
    description: 'Field notes by Andrew Whitely — notes on work, life, travel, and everything in between.',
    url: 'https://aw.works/notes',
    type: 'website',
  })

  return (
    <Layout>
      <main className="wrap blog-page">
        <div className="prompt">
          <span className="ps1">~/fieldnotes » $</span>
          <span className="cmd">ls</span>
          <span className="arg">-lt</span>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--dim)', margin: '0.4rem 0' }}>
          just some thoughts and things i want to share.
        </p>
        <Link to="/notes/tags" style={{ fontSize: '0.75rem', color: 'var(--dim)', display: 'inline-block', marginBottom: '1.5rem' }}>browse by tag →</Link>

        <div id="blog-list">
          {posts.length === 0 && <p className="blog-empty">no posts yet.</p>}
          {posts.sort((a, b) => (a.date < b.date ? 1 : -1)).map((post) => (
            <article className="blog-item" key={post.slug}>
              <div className="blog-item-main">
                <div className="blog-date">{formatDate(post.date, 'short')}</div>
                <div className="blog-title">
                  <Link to={`/notes/${post.slug}`}>{post.title}</Link>
                </div>
                {post.excerpt && (
                  <p
                    className="blog-excerpt"
                    dangerouslySetInnerHTML={{ __html: renderInline(post.excerpt) }}
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </Layout>
  )
}
