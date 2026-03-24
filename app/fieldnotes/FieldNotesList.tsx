import { format } from 'date-fns';
import { Post } from 'lib/mdx';
import Link from 'next/link';

interface FieldNotesListProps {
  posts: Post[];
}

export default function FieldNotesList({ posts }: FieldNotesListProps) {
  return (
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
  );
}
