import { useEffect, useState } from 'react'

export function useScrollProgress(): number {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    function onScroll() {
      const scrolled = document.documentElement.scrollTop
      const total = document.documentElement.scrollHeight - window.innerHeight
      setPct(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return pct
}
