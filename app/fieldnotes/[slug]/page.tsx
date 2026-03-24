import { format } from 'date-fns';
import { getAdjacentPosts, getPostBySlug } from 'lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function FieldNotesPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const { prev, next } = getAdjacentPosts(slug);

  if (!post) notFound();

  return (
    <article>
      <Link
        href='/fieldnotes'
        className='text-xs text-[#bbbbbb] hover:text-[#666666] transition-colors mb-8 block'
      >
        ← All Field Notes
      </Link>
      <p className='text-[#999999] text-sm mb-8'>
        {format(new Date(post.date), 'MMMM dd, yyyy')}
      </p>
      {post.tags && post.tags.length > 0 && (
        <div className='flex items-center gap-3 mb-8'>
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/fieldnotes/tags/${tag}`}
              className='text-xs text-[#999999] uppercase tracking-widest hover:text-[#111111] transition-colors'
            >
              {tag}
            </Link>
          ))}
        </div>
      )}
      <div className='prose prose-neutral max-w-none'>
        <MDXRemote source={post.content} />
      </div>

      <div className='mt-12 flex justify-between border-t border-[#e0e0e0] pt-8'>
        {prev && (
          <Link
            href={`/fieldnotes/${prev.slug}`}
            className='text-sm text-[#666666] hover:text-[#111111] transition-colors'
          >
            ← {prev.title}
          </Link>
        )}
        {next && (
          <Link
            href={`/fieldnotes/${next.slug}`}
            className='text-sm text-[#666666] hover:text-[#111111] transition-colors ml-auto'
          >
            {next.title} →
          </Link>
        )}
      </div>
    </article>
  );
}
