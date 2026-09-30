import { useState } from 'react'
import { useUptime } from '../hooks/useUptime'
// import { useClock } from '../hooks/useClock'
// import nowData from '../content/now.json'

interface Props {
  minimal?: boolean
}

// const NOW_GROUPS: { key: keyof typeof nowData; label: string }[] = [
//   { key: 'reading', label: 'reading' },
//   { key: 'listening', label: 'listening' },
//   { key: 'watching', label: 'watching' },
// ]

export default function Footer({ minimal }: Props) {
  const uptime = useUptime()
//   const { myTime, userTime } = useClock()
  const [tipOpen, setTipOpen] = useState(false)
  const year = new Date().getFullYear()

  return (
    <footer className="wrap">
      <div className="footer-top">
        <span>
          &copy; {year} Andrew Whitely
          {!minimal && (
            <>
              {' '}&nbsp;·&nbsp;{' '}
              <span
                className={'tooltip-wrap' + (tipOpen ? ' tip-open' : '')}
                style={{ cursor: 'default' }}
                onClick={(e) => {
                  e.stopPropagation()
                  setTipOpen((v) => !v)
                }}
              >
                <span style={{ borderBottom: '1px dotted var(--faint)' }}>{uptime}</span>
                <span className="tooltip-box">time since first job (July 17, 2018)</span>
              </span>
            </>
          )}
        </span>
        <div className="footer-links">
			<span>socials: </span>
          <a href="https://www.instagram.com/byandrew.jpg" target='_blank' rel='noopener'>instagram</a>
          <a href="https://www.letterboxd.com/andrewwhitely" target='_blank' rel='noopener'>letterboxd</a>
          <a href="https://fable.co/fabler/andrewwhitely-192731124337?tab=sta" target='_blank' rel='noopener'>fable</a>
          {/* {minimal && <a href="/">home</a>} */}
        </div>
      </div>

      {/* {!minimal && (
        <div className="footer-now">
          <span><span className="now-label">my time</span> {myTime}</span>
          {myTime !== userTime && <span><span className="now-label">your time</span> {userTime}</span>}
          {NOW_GROUPS.flatMap(({ key, label }) =>
            nowData[key].map((item, i) => (
              <span key={`${key}-${i}`}>
                <span className="now-label">{label}</span>{' '}
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener">{item.value}</a>
                ) : (
                  item.value
                )}
              </span>
            ))
          )}
        </div>
      )} */}
    </footer>
  )
}
