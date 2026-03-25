import { metaData } from '@/config';
import { getPostsByTag } from '@/lib/mdx';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';

export default function TagDetail() {
  const { tag } = useParams<{ tag: string }>();
  const posts = tag ? getPostsByTag(tag) : [];

  if (!tag || posts.length === 0) return <Navigate to='/404' replace />;

  return (
    <section>
      <Helmet>
        <title>
          {tag} | {metaData.name}
        </title>
        <meta name='description' content={`Field notes tagged with ${tag}.`} />
      </Helmet>
      <Link
        to='/fieldnotes/tags'
        className='text-xs text-[#bbbbbb] hover:text-[#666666] transition-colors mb-4 inline-block link hover-1'
      >
        ← All Tags
      </Link>
      <div className='flex items-baseline gap-3 mb-4'>
        <h1 className='text-sm font-medium tracking-widest uppercase text-[#666666]'>
          Tag: {tag}
        </h1>
      </div>
      <ul className='space-y-1'>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/fieldnotes/${post.slug}`}
              className='flex items-baseline gap-2 group'
            >
              <span className='text-sm text-[#111111] group-hover:text-[#666666] transition-colors shrink-0'>
                {post.title}
              </span>
              <span className='flex-1 border-b border-dotted border-[#dddddd] mb-[3px]' />
              <span className='text-xs text-[#bbbbbb] shrink-0 tabular-nums'>
                {format(new Date(post.date), 'MMM d, yyyy')}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
