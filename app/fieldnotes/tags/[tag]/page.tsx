import type { Metadata } from 'next';
import { format } from 'date-fns';
import { getAllTags, getPostsByTag } from 'lib/mdx';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map(({ tag }) => ({ tag }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: tag,
    description: `Field notes tagged with ${tag}.`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);

  if (posts.length === 0) notFound();

  return (
    <section>
      <div className='flex items-baseline gap-3 mb-8'>
        <h1 className='text-sm font-medium tracking-widest uppercase text-[#666666]'>
          {tag}
        </h1>
        <Link
          href='/fieldnotes/tags'
          className='text-xs text-[#bbbbbb] hover:text-[#666666] transition-colors'
        >
          ← all tags
        </Link>
      </div>
      <ul className='space-y-1'>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/fieldnotes/${post.slug}`}
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
