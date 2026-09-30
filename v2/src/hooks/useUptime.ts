export function useUptime(): string {
  const start = new Date(2018, 7, 17) // Aug 1, 2016
  const now = new Date()
  const diff = now.getTime() - start.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const years = Math.floor(days / 365)
  const rem = Math.floor((days % 365) / 30)
  const remDays = days % 30
  return `career length: ${years}y ${rem}m ${remDays}d`
}
