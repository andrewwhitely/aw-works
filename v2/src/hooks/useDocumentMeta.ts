import { useEffect } from 'react'

export interface MetaConfig {
  title: string
  description: string
  url: string
  type?: 'website' | 'article'
  publishedTime?: string
  image?: string
}

function setMeta(selector: string, content: string) {
  if (!content) return
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', content)
}

export function useDocumentMeta(meta: MetaConfig) {
  useEffect(() => {
    document.title = meta.title
    setMeta('meta[name="description"]', meta.description)
    setMeta('meta[property="og:title"]', meta.title)
    setMeta('meta[property="og:description"]', meta.description)
    setMeta('meta[property="og:url"]', meta.url)
    setMeta('meta[property="og:type"]', meta.type || 'website')
    if (meta.publishedTime) setMeta('meta[property="article:published_time"]', meta.publishedTime)
    if (meta.image) setMeta('meta[property="og:image"]', meta.image)
    setMeta('meta[name="twitter:title"]', meta.title)
    setMeta('meta[name="twitter:description"]', meta.description)
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) canonical.setAttribute('href', meta.url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meta.title, meta.description, meta.url, meta.type, meta.publishedTime, meta.image])
}
