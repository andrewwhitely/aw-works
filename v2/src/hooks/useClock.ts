import { useEffect, useState } from 'react'

const MY_TIMEZONE = 'America/New_York'

const myFormatter = new Intl.DateTimeFormat([], {
  dateStyle: 'long',
  timeStyle: 'medium',
  timeZone: MY_TIMEZONE,
})

const userFormatter = new Intl.DateTimeFormat([], {
  dateStyle: 'long',
  timeStyle: 'medium',
})

const myZoneLabel =
  new Intl.DateTimeFormat([], { timeZone: MY_TIMEZONE, timeZoneName: 'short' })
    .formatToParts(new Date())
    .find((p) => p.type === 'timeZoneName')?.value ?? ''

const userZoneLabel =
  new Intl.DateTimeFormat([], { timeZoneName: 'short' })
    .formatToParts(new Date())
    .find((p) => p.type === 'timeZoneName')?.value ?? ''

export interface ClockTimes {
  myTime: string
  userTime: string
}

function readTimes(): ClockTimes {
  const now = new Date()
  return {
    myTime: `${myFormatter.format(now)} ${myZoneLabel}`,
    userTime: `${userFormatter.format(now)} ${userZoneLabel}`,
  }
}

export function useClock(): ClockTimes {
  const [times, setTimes] = useState<ClockTimes>(readTimes)

  useEffect(() => {
    const id = setInterval(() => setTimes(readTimes()), 1000)
    return () => clearInterval(id)
  }, [])

  return times
}
