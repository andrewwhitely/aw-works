import { socialLinks } from '@/config';
import { nowData } from '@/data/now-data';
import { useEffect, useState } from 'react';

export default function Footer() {
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
    <footer className='mt-auto pt-4 border-t border-[#e0e0e0]'>
      <div className='flex items-center justify-between'>
        <span className='text-xs text-[#999999]'>&copy; {new Date().getFullYear()} &mdash; AW</span>
        <div className='flex items-center gap-4'>
          {[
            { href: socialLinks.github, icon: <GitHubIcon />, label: 'GitHub' },
            { href: socialLinks.linkedin, icon: <LinkedInIcon />, label: 'LinkedIn' },
            { href: socialLinks.instagram, icon: <InstagramIcon />, label: 'Instagram' },
            { href: socialLinks.letterboxd, icon: <LetterboxdIcon />, label: 'Letterboxd' },
            { href: 'https://fable.co/fabler/andrewwhitely-192731124337', icon: <FableIcon />, label: 'Fable' },
            { href: socialLinks.email, icon: <EmailIcon />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel='noopener noreferrer'
              aria-label={label}
              className='text-[#bbbbbb] hover:text-[#111111] transition-colors'
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Social Icons ────────────────────────────────────────────────────────────

function GitHubIcon() {
  return (
    <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
      <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
      <path d='M9 18c-4.51 2-5-2-7-2' />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
      <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
      <rect x='2' y='9' width='4' height='12' />
      <circle cx='4' cy='4' r='2' />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
      <rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
      <circle cx='12' cy='12' r='4' />
      <circle cx='17.5' cy='6.5' r='0.5' fill='currentColor' stroke='none' />
    </svg>
  );
}

function LetterboxdIcon() {
  return (
    <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
      <circle cx='8' cy='12' r='5' />
      <circle cx='16' cy='12' r='5' />
    </svg>
  );
}

function FableIcon() {
  return (
    <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
      <path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' />
      <path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width='15' height='15' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.75' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
      <rect x='2' y='4' width='20' height='16' rx='2' />
      <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
    </svg>
  );
}

// ─── Status Icons ─────────────────────────────────────────────────────────────

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
