import Layout from '../components/Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import usesData from '../content/uses.json'

type Product = {
	name: string;
	category: string;
	description?: string | string[];
}

const products: Product[] = usesData.products
const categories = [
	{ key: 'workspace', label: 'Workspace' },
	{ key: 'equipment', label: 'Equipment' },
	{ key: 'software', label: 'Software' },
	{ key: 'photography', label: 'Photography' },
	{ key: 'gaming', label: 'Gaming' },
	{ key: 'misc', label: 'Miscellaneous' },
];

function describe(description: Product['description']) {
  return Array.isArray(description) ? description.join(' · ') : description
}

export default function Uses() {
  useDocumentMeta({
    title: 'Uses — Andrew Whitely',
    description: 'Gear, software, and tools I use regularly.',
    url: 'https://aw.works/uses',
    type: 'website',
  })

  return (
    <Layout>
      <main className="wrap blog-page">
        <div className="prompt">
          <span className="ps1">~/uses » $</span>
          <span className="cmd">ls</span>
          <span className="arg">-l</span>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--dim)', margin: '0.4rem 0 1.5rem' }}>
          gear, software, and tools i use regularly.
        </p>

        {categories.map(({ key, label }) => {
          const items = products.filter((p) => p.category === key)
          if (items.length === 0) return null
          return (
            <div key={key} style={{ marginBottom: '2rem' }}>
              <div className="sec-heading"><span className="hash">#</span><span className="label">{label.toLowerCase()}</span></div>
              <div id="blog-list">
                {items.map((product, index) => (
                  <article className="blog-item" key={product.name}>
					<div className="blog-date">
						{String(index + 1).padStart(2, '0')}
					</div>
                    <div className="blog-item-main">
                      <div className="blog-title">{product.name}</div>
                      {product.description && (
                        <p className="blog-excerpt">{describe(product.description)}</p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )
        })}
      </main>
    </Layout>
  )
}
