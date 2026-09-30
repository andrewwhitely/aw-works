import { useLocation } from 'react-router-dom'
import Layout from '../components/Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export default function NotFound() {
  const location = useLocation()

  useDocumentMeta({
    title: '404 — Andrew Whitely',
    description: 'Page not found — Andrew Whitely',
    url: 'https://aw.works' + location.pathname,
  })

  return (
    <Layout footerVariant="minimal">
      <main className="wrap not-found" id="not-found">
        <div className="prompt">
          <span className="ps1">~» $</span>
          <span className="cmd">cat</span>
          <span className="arg" id="missing-path">{location.pathname}</span>
        </div>
        <h1>404 — file not found</h1>
        <p>no such path. try <a href="/">~/</a> or <a href="/blog">~/blog</a>.</p>
      </main>
    </Layout>
  )
}
