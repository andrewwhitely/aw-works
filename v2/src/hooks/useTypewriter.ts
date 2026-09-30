import { useEffect, useState } from 'react'

export interface Cycle {
  cmd: string
  out: string | string[]
}

function sleep(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms))
}

export function useTypewriter(cycles: Cycle[]) {
  const [cmd, setCmd] = useState('')
  const [out, setOut] = useState<string[] | string>('')

  useEffect(() => {
    // Local to this effect invocation (not a ref) so React StrictMode's dev-only
    // mount->cleanup->mount double-invoke can't let a stale run un-cancel itself
    // via a flag shared with the new run — each invocation gets its own.
    let cancelled = false
    let ci = 0

    async function type(text: string, speed: number) {
      for (let i = 0; i < text.length; i++) {
        if (cancelled) return
        setCmd((prev) => prev + text[i])
        await sleep(speed)
      }
    }

    async function erase(speed: number) {
      let current = ''
      setCmd((prev) => {
        current = prev
        return prev
      })
      while (current.length > 0) {
        if (cancelled) return
        current = current.slice(0, -1)
        setCmd(current)
        await sleep(speed)
      }
    }

    async function loop() {
      if (cancelled || cycles.length === 0) return
      const c = cycles[ci % cycles.length]
      ci++
      setCmd('')
      await type(c.cmd, 55)
      if (cancelled) return
      await sleep(500)
      if (cancelled) return
      setOut(c.out)
      await sleep(2200)
      if (cancelled) return
      setOut('')
      await erase(30)
      if (cancelled) return
      await sleep(350)
      loop()
    }

    loop()

    return () => {
      cancelled = true
    }
  }, [cycles])

  return { cmd, out }
}
