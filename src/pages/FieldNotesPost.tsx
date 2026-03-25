import { ScrollColorText } from '@/components/ScrollColorText';
import { metaData } from '@/config';
import {
  getAdjacentPosts,
  getPostBySlug,
  loadPostComponent,
  readingTime,
  type MDXComponent,
} from '@/lib/mdx';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate, useParams } from 'react-router-dom';

export default function FieldNotesPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;
  const [PostComponent, setPostComponent] = useState<MDXComponent | null>(null);

  useEffect(() => {
    if (!slug || !post) return;
    loadPostComponent(slug).then((comp) => setPostComponent(() => comp));
  }, [slug, post]);

  if (!post) return <Navigate to='/404' replace />;

  const { prev, next } = getAdjacentPosts(post.slug);

  return (
    <article>
      <Helmet>
        <title>
          {post.title} | {metaData.name}
        </title>
        <meta name='description' content={post.excerpt} />
      </Helmet>
      <Link
        to='/fieldnotes'
        className='text-xs text-[#bbbbbb] hover:text-[#666666] transition-colors mb-4 inline-block link hover-1'
      >
        ← All Field Notes
      </Link>
      {post.tags && post.tags.length > 0 && (
        <div className='flex flex-wrap gap-2 mb-6'>
          {post.tags.map((tag) => (
            <Link
              key={tag}
              to={`/fieldnotes/tags/${tag}`}
              className='text-xs text-[#999999] border border-[#e0e0e0] rounded px-2 py-0.5 uppercase'
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}
      <div className='flex flex-wrap items-center gap-x-2 gap-y-1 mb-4'>
        <span className='text-[#999999] text-sm'>
          {format(new Date(post.date), 'MMMM dd, yyyy')}
        </span>
        <span className='text-[#444] text-sm'>·</span>
        <span className='text-[#999999] text-sm'>
          {readingTime(post.wordCount)}
        </span>
        {/* {post.runtime && (
          <>
            <span className='text-[#444] text-sm'>·</span>
            <span className='inline-flex items-center gap-1 text-xs font-mono text-[#888] border border-[#d8d8d8] rounded-sm px-2 py-0.5 tracking-wide'>
              <span className='text-[#bbb]' aria-hidden='true'>
                ▸
              </span>
              {post.runtime}
            </span>
          </>
        )} */}
      </div>
      <div className='prose prose-neutral max-w-none'>
        {PostComponent ? (
          <PostComponent
            components={{
              p: (props: object) => <ScrollColorText {...props} />,
              h2: (props: object) => <ScrollColorText as='h2' {...props} />,
              h3: (props: object) => <ScrollColorText as='h3' {...props} />,
            }}
          />
        ) : (
          <p className='text-[#999999]'>Loading...</p>
        )}
      </div>

      {(prev || next) && (
        <div className='mt-12 flex justify-between pt-8'>
          {prev && (
            <Link
              to={`/fieldnotes/${prev.slug}`}
              className='text-sm text-[#666666] hover:text-[#111111] transition-colors'
            >
              ← {prev.title}
            </Link>
          )}
          {next && (
            <Link
              to={`/fieldnotes/${next.slug}`}
              className='text-sm text-[#666666] hover:text-[#111111] transition-colors ml-auto'
            >
              {next.title} →
            </Link>
          )}
        </div>
      )}
    </article>
  );
}
