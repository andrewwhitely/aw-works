import { metaData } from '@/config';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' as const } },
};

export default function Home() {
  return (
    <section>
      <Helmet>
        <title>{metaData.title}</title>
        <meta name='description' content={metaData.description} />
        <meta property='og:title' content={metaData.title} />
        <meta property='og:description' content={metaData.description} />
        <meta property='og:image' content={metaData.ogImage} />
        <meta property='og:url' content={metaData.baseUrl} />
        <meta name='twitter:card' content='summary_large_image' />
      </Helmet>
      <motion.div className='prose prose-neutral' variants={container} initial='hidden' animate='show'>
        <motion.p variants={item} className='text-2xl font-medium tracking-tight text-[#111111]'>
          Software Engineer. Creative technologist. Chronic hobbyist.
        </motion.p>
        <motion.p variants={item} className='text-[#111111]'>
          Building end-to-end digital experiences, blending creativity and code
          to go from idea to execution.
        </motion.p>
      </motion.div>
    </section>
  );
}
