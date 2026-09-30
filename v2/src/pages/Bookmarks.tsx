import Layout from '../components/Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import bookmarksData from '../content/bookmarks.json'

type Bookmark = {
  title: string
  url: string
  description: string
  category: string
}

const bookmarks: Bookmark[] = bookmarksData.bookmarks
const categories = Array.from(new Set(bookmarks.map((b) => b.category)))

export default function Bookmarks() {
  useDocumentMeta({
    title: 'Bookmarks — Andrew Whitely',
    description: 'Links worth saving.',
    url: 'https://aw.works/bookmarks',
    type: 'website',
  })

  return (
    <Layout>
      <main className="wrap blog-page">
        <div className="prompt">
          <span className="ps1">~/bookmarks » $</span>
          <span className="cmd">ls</span>
          <span className="arg"></span>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--dim)', margin: '0.4rem 0 1.5rem' }}>
          things worth saving, updated as I find them.
        </p>

        {categories.map((category) => (
          <div className="bookmark-group" key={category}>
            <div className="sec-heading"><span className="hash">#</span><span className="label">{category}</span></div>
            <div>
              {bookmarks
                .filter((b) => b.category === category)
                .map((bookmark, index) => (
                  <a
                    key={index}
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener"
                    className="bookmark-item"
                  >
                    <span className="bookmark-title">{bookmark.title}</span>
                    <span className="bookmark-desc">{bookmark.description}</span>
                  </a>
                ))}
            </div>
          </div>
        ))}
      </main>
    </Layout>
  )
}
