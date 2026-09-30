import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import worksData from '../content/works.json'
import { projectMatchesCategory, type Project } from '../lib/works'

const projects: Project[] = worksData.projects as Project[]
const categories = worksData.categories

const populatedCategories = categories.filter(({ key }) =>
  projects.some((p) => projectMatchesCategory(p, key))
)

function ProjectRow({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="work-item">
      <button className="work-row" onClick={() => setOpen((o) => !o)}>
        <span style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
          <span className="work-title">{project.title}</span>
          {project.featured && <span className="badge badge-featured">★ featured</span>}
        </span>
        <span className="work-year">{project.year}</span>
      </button>
      {open && (
        <div className="work-detail">
          <p>{project.description}</p>
          {project.tags && project.tags.length > 0 && (
            <div className="tag-chips" style={{ marginBottom: '0.75rem' }}>
              {project.tags.map((tag) => (
                <span className="tag-chip" key={tag}>{tag}</span>
              ))}
            </div>
          )}
          {project.notes && project.notes.length > 0 && (
            <div className="work-notes">
              {project.notes.slice(0, 3).map((note) => (
                <div key={note.label}>
                  <span>{note.label}</span>
                  <span>{note.value}</span>
                </div>
              ))}
            </div>
          )}
          <Link to={`/works/${project.slug}`} className="work-detail-link">Read more →</Link>
        </div>
      )}
    </div>
  )
}

export default function Works() {
  const [activeTab, setActiveTab] = useState(populatedCategories[0]?.key ?? '')

  useDocumentMeta({
    title: 'Works — Andrew Whitely',
    description: 'Selected projects.',
    url: 'https://aw.works/works',
    type: 'website',
  })

  const visibleProjects = projects
    .filter((p) => projectMatchesCategory(p, activeTab))
    .sort((a, b) => Number(!!b.featured) - Number(!!a.featured) || b.year - a.year)

  return (
    <Layout>
      <main className="wrap blog-page">
        <div className="prompt">
		  <span className="ps1">~/works » $</span>
          <span className="cmd">ls</span>
          <span className="arg">-l</span>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--dim)', margin: '0.4rem 0 1.5rem' }}>
          selected projects.
        </p>

        <div className="tab-row">
          {populatedCategories.map(({ key, label }) => (
            <button
              key={key}
              className={'tab-btn' + (activeTab === key ? ' active' : '')}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div>
          {visibleProjects.map((project) => (
            <ProjectRow project={project} key={project.slug} />
          ))}
        </div>
      </main>
    </Layout>
  )
}
