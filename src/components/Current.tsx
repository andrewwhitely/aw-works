import { nowData } from '@/data/now-data';
import { useEffect, useState } from 'react';

export default function Current() {
  const { reading, listening, watching } = nowData;
  const MY_TIMEZONE = 'America/New_York';

  const myFormatter = new Intl.DateTimeFormat([], {
    dateStyle: 'long',
    timeStyle: 'medium',
    timeZone: MY_TIMEZONE,
  });

  const userFormatter = new Intl.DateTimeFormat([], {
    dateStyle: 'long',
    timeStyle: 'medium',
  });

  const myZoneLabel =
    new Intl.DateTimeFormat([], {
      timeZone: MY_TIMEZONE,
      timeZoneName: 'short',
    })
      .formatToParts(new Date())
      .find((p) => p.type === 'timeZoneName')?.value ?? '';

  const userZoneLabel =
    new Intl.DateTimeFormat([], {
      timeZoneName: 'short',
    })
      .formatToParts(new Date())
      .find((p) => p.type === 'timeZoneName')?.value ?? '';

  const [times, setTimes] = useState(() => {
    const now = new Date();
    return {
      myTime: `${myFormatter.format(now)} ${myZoneLabel}`,
      userTime: `${userFormatter.format(now)} ${userZoneLabel}`,
    };
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTimes({
        myTime: `${myFormatter.format(now)} ${myZoneLabel}`,
        userTime: `${userFormatter.format(now)} ${userZoneLabel}`,
      });
    };
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className='mt-auto pt-4 pb-2'>
      <div className='flex flex-wrap place-content-start jusitfy-evenly gap-x-5 gap-y-2 text-xs items-center'>
        <span className='tabular-nums'>
          <StatusItem
            icon={<ClockIcon />}
            label='My Time'
            value={times.myTime}
          />
        </span>

        {times.myTime !== times.userTime && (
          <span className='tabular-nums'>
            <StatusItem icon={<ClockIcon />} value={times.userTime} />
          </span>
        )}
        {reading.value && (
          <StatusItem
            icon={<BookIcon />}
            label={reading.label}
            value={reading.value}
            href={reading.href}
          />
        )}
        {listening.value && (
          <StatusItem
            icon={<HeadphonesIcon />}
            label={listening.label}
            value={listening.value}
            href={listening.href}
          />
        )}
        {watching.value && (
          <StatusItem
            icon={<MonitorIcon />}
            label={watching.label}
            value={watching.value}
            href={watching.href}
          />
        )}
      </div>
    </footer>
  );
}

// Icons as inline SVGs to avoid extra dependencies
function BookIcon() {
  return (
    <svg
      width='13'
      height='13'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.75'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <path d='M4 19.5A2.5 2.5 0 0 1 6.5 17H20' />
      <path d='M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z' />
    </svg>
  );
}

function HeadphonesIcon() {
  return (
    <svg
      width='13'
      height='13'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.75'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <path d='M3 18v-6a9 9 0 0 1 18 0v6' />
      <path d='M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z' />
      <path d='M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z' />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg
      width='13'
      height='13'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.75'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <rect x='2' y='3' width='20' height='14' rx='2' />
      <line x1='8' y1='21' x2='16' y2='21' />
      <line x1='12' y1='17' x2='12' y2='21' />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width='13'
      height='13'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.75'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <circle cx='12' cy='12' r='10' />
      <polyline points='12 6 12 12 16 14' />
    </svg>
  );
}

interface StatusItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

function StatusItem({ icon, label, value, href }: Partial<StatusItemProps>) {
  return (
    <span className='inline-flex items-center gap-1.5 text-[#999999]'>
      {icon && <span className='text-[#bbbbbb]'>{icon}</span>}
      {label && <span className='sr-only'>{label}:</span>}
      {href ? (
        <a
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-[#111111] transition-colors underline decoration-[#dddddd] underline-offset-2 hover:decoration-[#999999]'
        >
          {value}
        </a>
      ) : (
        <span>{value}</span>
      )}
    </span>
  );
}
