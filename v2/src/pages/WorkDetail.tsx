import { Link, Navigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import worksData from '../content/works.json'
import type { Project } from '../lib/works'

const projects: Project[] = worksData.projects as Project[]

export default function WorkDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  useDocumentMeta({
    title: project ? `${project.title} — Andrew Whitely` : 'Not Found — Andrew Whitely',
    description: project?.description ?? '',
    url: `https://aw.works/works/${slug ?? ''}`,
    type: 'website',
  })

  if (!project) return <Navigate to="/404" replace />

  return (
    <Layout>
      <main className="wrap blog-page">
        <Link to="/works" className="work-page-back">← All Works</Link>

        {project.tags && project.tags.length > 0 && (
          <div className="tag-chips" style={{ marginBottom: '1.25rem' }}>
            {project.tags.map((tag) => (
              <span className="tag-chip" key={tag}>{tag}</span>
            ))}
          </div>
        )}

        <h1 className="work-page-title">{project.title}</h1>
        {project.links && project.links.length > 0 && (
          <div className="work-page-links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener">{link.label}</a>
            ))}
          </div>
        )}
        <p className="work-page-desc">{project.description}</p>

        <div className="work-page-body">
          <div className="work-page-main">
            {project.about && project.about.length > 0 && (
              <div className="work-page-section">
                <h2>About</h2>
                {project.about.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            )}

            {project.features && project.features.length > 0 && (
              <div className="work-page-section">
                <h2>Features</h2>
                <ul>
                  {project.features.map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
              </div>
            )}

            {project.services && project.services.length > 0 && (
              <div className="work-page-section">
                <h2>Services</h2>
                <ul>
                  {project.services.map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
              </div>
            )}

            {project.planned && project.planned.length > 0 && (
              <div className="work-page-section">
                <h2>Planned Features</h2>
                <ul>
                  {project.planned.map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
              </div>
            )}

            {project.privacy && project.privacy.length > 0 && (
              <div className="work-page-privacy">
                {project.privacy.map((link) => (
                  <Link key={link.href} to={link.href}>{link.label}</Link>
                ))}
              </div>
            )}
          </div>

          {project.notes && project.notes.length > 0 && (
            <div className="work-page-notes-col">
              <div className="work-page-section">
                <h2>Notes</h2>
                <div className="work-page-notes">
                  {project.notes.map((note) => (
                    <div key={note.label}>
                      <span className="note-label">{note.label}</span>
                      {note.href ? (
                        <a className="note-value" href={note.href} target="_blank" rel="noopener">{note.value}</a>
                      ) : (
                        <span className="note-value">{note.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </Layout>
  )
}
