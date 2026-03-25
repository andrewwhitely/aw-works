import { metaData } from '@/config';
import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <section>
      <Helmet>
        <title>About | {metaData.name}</title>
        <meta name='description' content='About | Andrew Whitely' />
      </Helmet>
      <h1 className='mb-6 text-sm font-medium tracking-widest uppercase text-[#666666]'>
        About
      </h1>
      <div className='prose prose-neutral'>
        <p className='text-[#111111]'>
          I'm a software engineer who loves diving into the deep end. As early
          as I can remember, I was always finding ways to build things on my
          computer &mdash; virtual servers to host radio stations, spinning up
          web forums, developing games, and more. I always had a passion for
          making things that looked great, felt great, and helped people.
        </p>
        <p className='text-[#111111]'>
          My first <span className='italic font-serif'>oh, wow</span> moment was
          when I would spend hours making{' '}
          <a
            href='https://x.com/ilyamiskov/status/1679535386987462656'
            target='_blank'
            rel='noopener noreferrer'
          >
            userbars
          </a>{' '}
          on a RuneScape forum. I was obsessed with exploring Photoshop and just
          learning as much as I could about design. This exposure and love for
          how I was able to create such simple graphics has stuck with me and is
          a driving force that I bring to the products I build today.
        </p>
        <p className='text-[#111111]'>
          When I'm not coding, you can find me binging YouTube videos on the
          history of video games, watching Formula 1, or cycling. I also love{' '}
          <a
            href='https://letterboxd.com/andrewwhitely'
            target='_blank'
            rel='noopener noreferrer'
          >
            movies
          </a>
          ,{' '}
          <a
            href='https://byandrew.xyz'
            target='_blank'
            rel='noopener noreferrer'
          >
            photography
          </a>
          , and am always trying to{' '}
          <a
            href='https://fable.co/fabler/andrewwhitely-192731124337'
            target='_blank'
            rel='noopener noreferrer'
          >
            read
          </a>{' '}
          a good book.
        </p>
      </div>
    </section>
  );
}
