import { useEffect, useState } from 'react'
import { useTypewriter, type Cycle } from '../hooks/useTypewriter'

interface Props {
  visible: boolean
}

const CONNECTING_TEXT = 'connecting'
const CONNECTING_CYCLE: Cycle[] = [{ cmd: CONNECTING_TEXT, out: '' }]

export default function LoadingScreen({ visible }: Props) {
  const [mounted, setMounted] = useState(true)
  const { cmd } = useTypewriter(CONNECTING_CYCLE)
  const [dots, setDots] = useState(0)
  const typingDone = cmd === CONNECTING_TEXT

  useEffect(() => {
    if (!typingDone) return
    const id = setInterval(() => setDots((d) => (d + 1) % 4), 500)
    return () => clearInterval(id)
  }, [typingDone])

  if (!mounted) return null

  const line = typingDone ? CONNECTING_TEXT + '.'.repeat(dots) : cmd

  return (
    <div
      id="loading-screen"
      className={visible ? '' : 'hide'}
      onTransitionEnd={() => {
        if (!visible) setMounted(false)
      }}
    >
      <div className='prompt'>
        <span className='ps1 loading-brand'>~ » $</span>
        <span className='cmd'>ssh</span>
        <span className='arg'>visitor@aw.works</span>
        <span className='cursor' />
      </div>
      <div className='prompt'>
        <span className='dim'>{line}</span>
      </div>
    </div>
  )
}
