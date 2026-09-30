import { useState, type ReactNode } from 'react'

interface Props {
  labelOpen: string
  labelClosed: string
  className?: string
  children: ReactNode
  contentStyle?: React.CSSProperties
}

export default function Toggle({ labelOpen, labelClosed, className, children, contentStyle }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button className={className || 'talk-toggle-btn'} onClick={() => setOpen((o) => !o)}>
        {open ? labelOpen : labelClosed}
      </button>
      {open && <div style={{ marginTop: '0.75rem', ...contentStyle }}>{children}</div>}
    </>
  )
}
