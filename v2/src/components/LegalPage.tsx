import { Link } from 'react-router-dom'
import Layout from './Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

interface Section {
  title: string
  content?: string[]
  items?: string[]
}

interface Props {
  app: string
  title: string
  sub: string
  backHref: string
  backLabel: string
  description: string
  url: string
  sections: Section[]
}

export default function LegalPage({ app, title, sub, backHref, backLabel, description, url, sections }: Props) {
  useDocumentMeta({
    title: `${app} — ${title} — Andrew Whitely`,
    description,
    url,
    type: 'website',
  })

  return (
    <Layout>
      <main className="wrap blog-page">
        <Link to={backHref} className="work-page-back">← {backLabel}</Link>

        <h1 className="legal-page-title">{title}</h1>
        <p className="legal-page-sub">{sub}</p>

        <div>
          {sections.map((section) => (
            <div className="legal-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.content?.map((para, i) => <p key={i}>{para}</p>)}
              {section.items && (
                <ul>
                  {section.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}
