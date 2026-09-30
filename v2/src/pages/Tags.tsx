import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { getAllTags } from '../lib/blog'

export default function Tags() {
  const tags = getAllTags()

  useDocumentMeta({
    title: 'Tags — Andrew Whitely',
    description: 'Browse field notes by tag.',
    url: 'https://aw.works/notes/tags',
    type: 'website',
  })

  return (
    <Layout>
      <main className="wrap blog-page">
        <div className="prompt">
          <span className="ps1">~/fieldnotes » $</span>
          <span className="cmd">ls</span>
          <span className="arg">tags/</span>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--dim)', margin: '0.4rem 0 1.5rem' }}>
          browse field notes by tag.
        </p>

        {tags.length === 0 && <p className="blog-empty">no tags yet.</p>}
        <div>
          {tags.map(({ tag, count }) => (
            <Link to={`/notes/tags/${tag}`} className="tag-list-item" key={tag}>
              <span className="tag-list-name">{tag}</span>
              <span className="tag-list-leader" />
              <span className="tag-list-count">{count} {count === 1 ? 'note' : 'notes'}</span>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  )
}
