import { useEffect, useRef, useState } from 'react'
import Layout from '../components/Layout'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

const ALL_TAB = 'all'

export interface PhotoItem {
  key: string
  url: string
  tag: string
}

interface PhotosResponse {
  photos: PhotoItem[]
  cursor: string | null
}

// Module-level cache — survives tab switches and back-navigation.
const cache: { photos: PhotoItem[]; cursor: string | null; tags: string[] } = {
  photos: [],
  cursor: null,
  tags: [],
}

async function fetchTags(): Promise<string[]> {
  const res = await fetch('/api/photos?tags')
  return res.json() as Promise<string[]>
}

async function fetchPage(cursor?: string): Promise<PhotosResponse> {
  const url = cursor ? `/api/photos?cursor=${cursor}` : '/api/photos'
  const res = await fetch(url)
  const data = (await res.json()) as PhotosResponse | PhotoItem[]
  if (Array.isArray(data)) return { photos: data, cursor: null }
  return data
}

function PhotoCard({ photo }: { photo: PhotoItem }) {
  const [inView, setInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="photo-card" ref={containerRef}>
      {inView && <img src={photo.url} alt={photo.key} loading="lazy" />}
    </div>
  )
}

export default function Photos() {
  const [photos, setPhotos] = useState<PhotoItem[]>(cache.photos)
  const [cursor, setCursor] = useState<string | null>(cache.cursor)
  const [tags, setTags] = useState<string[]>(cache.tags)
  const [initialLoading, setInitialLoading] = useState(cache.photos.length === 0)
  const [activeTab, setActiveTab] = useState(ALL_TAB)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useDocumentMeta({
    title: 'Photos — Andrew Whitely',
    description: 'Film photography.',
    url: 'https://aw.works/photos',
    type: 'website',
  })

  useEffect(() => {
    if (cache.tags.length > 0) return
    fetchTags().then((t) => {
      cache.tags = t
      setTags(t)
    })
  }, [])

  useEffect(() => {
    if (cache.photos.length > 0) return
    fetchPage().then(({ photos: p, cursor: c }) => {
      cache.photos = p
      cache.cursor = c
      setPhotos(p)
      setCursor(c)
      setInitialLoading(false)
    })
  }, [])

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel || !cursor) return
    let loadingMore = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || loadingMore) return
        loadingMore = true
        fetchPage(cursor).then(({ photos: p, cursor: c }) => {
          cache.photos = [...cache.photos, ...p]
          cache.cursor = c
          setPhotos(cache.photos)
          setCursor(c)
        })
      },
      { rootMargin: '400px' }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [cursor])

  const allTabs = [ALL_TAB, ...tags.filter(Boolean)]
  const visible = activeTab === ALL_TAB ? photos : photos.filter((p) => p.tag === activeTab)

  return (
    <Layout>
      <main className="wrap blog-page">
        <div className="prompt">
          <span className="ps1">~/photos » $</span>
          <span className="cmd">ls</span>
          <span className="arg">-l</span>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--dim)', margin: '0.4rem 0 1.5rem' }}>
          a collection of my photos, shot on film and digital.
        </p>

        {!initialLoading && allTabs.length > 1 && (
          <div className="tab-row">
            {allTabs.map((tag) => (
              <button
                key={tag}
                className={'tab-btn' + (activeTab === tag ? ' active' : '')}
                onClick={() => setActiveTab(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {initialLoading ? (
          <p className="photo-empty">loading photos…</p>
        ) : visible.length === 0 ? (
          <p className="photo-empty">no photos yet.</p>
        ) : (
          <>
            <div className="photo-grid">
              {visible.map((photo) => (
                <PhotoCard photo={photo} key={photo.key} />
              ))}
            </div>
            {cursor && <div ref={sentinelRef} style={{ height: '3rem' }} />}
          </>
        )}
      </main>
    </Layout>
  )
}
