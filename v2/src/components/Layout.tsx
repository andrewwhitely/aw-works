import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import ProgressBar from './ProgressBar'
import CommandPalette from './CommandPalette'

interface Props {
  footerVariant?: 'full' | 'minimal'
  children: React.ReactNode
}

export default function Layout({ footerVariant = 'full', children }: Props) {
  const location = useLocation()
  const openCmdRef = useRef<() => void>(() => {})

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1))
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash])

  return (
    <>
      <ProgressBar />
      <Nav onOpenCmd={() => openCmdRef.current()} />
      {children}
      <CommandPalette registerOpen={(fn) => { openCmdRef.current = fn }} />
      <Footer minimal={footerVariant === 'minimal'} />
    </>
  )
}
