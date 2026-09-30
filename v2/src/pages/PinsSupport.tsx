import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import legalData from '../content/legal.json'

const data = legalData['pins-support']

export default function PinsSupport() {
  useDocumentMeta({
    title: `${data.app} — ${data.title} — Andrew Whitely`,
    description: data.description,
    url: 'https://aw.works/works/pins/support',
    type: 'website',
  })

  return (
    <Layout>
      <main className="wrap blog-page">
        <Link to={data.backHref} className="work-page-back">← {data.backLabel}</Link>

        <h1 className="legal-page-title">{data.title}</h1>
        <p className="legal-page-sub">{data.subtitle}</p>

        <div className="legal-section legal-contact">
          <h2>Get in touch</h2>
          <p>Have a question, found a bug, or want to request a feature? I read every message and try to respond within a couple of days.</p>
          <p>
            Email{' '}
            <a href={`mailto:${data.contactEmail}?subject=${encodeURIComponent(data.contactSubject)}`}>
              {data.contactEmail}
            </a>.
          </p>
        </div>

        <div className="legal-section">
          <h2>Frequently asked questions</h2>
          {data.faqs.map((faq) => (
            <div key={faq.title} style={{ marginBottom: '1.1rem' }}>
              <p style={{ fontWeight: 600, color: 'var(--text)' }}>{faq.title}</p>
              {faq.content.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}
