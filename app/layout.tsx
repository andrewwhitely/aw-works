import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Fraunces, Instrument_Sans, JetBrains_Mono } from 'next/font/google';
import { Navbar } from './components/Navbar';
import { metaData } from './config';
import './global.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.name}`,
  },
  description: metaData.description,
  openGraph: {
    images: metaData.ogImage,
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: metaData.name,
    card: 'summary_large_image',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${instrumentSans.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          rel='alternate'
          type='application/rss+xml'
          href='/rss.xml'
          title='RSS Feed'
        />
        <link
          rel='alternate'
          type='application/atom+xml'
          href='/atom.xml'
          title='Atom Feed'
        />
        <link
          rel='alternate'
          type='application/feed+json'
          href='/feed.json'
          title='JSON Feed'
        />
      </head>
      <body className='antialiased min-h-screen flex flex-col mx-auto'>
        <main className='container mx-auto flex-1 min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 w-full'>
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
