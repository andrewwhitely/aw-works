import { metaData } from '@/config';
import { getAllTags } from '@/lib/mdx';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Tags() {
  const tags = getAllTags();

  return (
    <section>
      <Helmet>
        <title>Tags | {metaData.name}</title>
        <meta name='description' content='Browse field notes by tag.' />
      </Helmet>
      <h1 className='mb-8 text-sm font-medium tracking-widest uppercase text-[#666666]'>
        Tags
      </h1>
      <ul className='space-y-1'>
        {tags.map(({ tag, count }) => (
          <li key={tag}>
            <Link
              to={`/fieldnotes/tags/${tag}`}
              className='flex items-baseline gap-2 group'
            >
              <span className='text-sm text-[#111111] group-hover:text-[#666666] transition-colors shrink-0'>
                {tag}
              </span>
              <span className='flex-1 border-b border-dotted border-[#dddddd] mb-[3px]' />
              <span className='text-xs text-[#bbbbbb] shrink-0 tabular-nums'>
                {count} {count === 1 ? 'note' : 'notes'}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
