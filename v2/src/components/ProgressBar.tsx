import { useScrollProgress } from '../hooks/useScrollProgress'

export default function ProgressBar() {
  const pct = useScrollProgress()
  return <div id="progress-bar" style={{ width: pct + '%' }} />
}
