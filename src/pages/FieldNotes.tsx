import { metaData } from '@/config';
import { getAllPosts, type Post } from '@/lib/mdx';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function FieldNotesList({ posts }: { posts: Post[] }) {
	return (
		<ul className="space-y-1">
			{posts.map((post) => (
				<li key={post.slug}>
					<Link
						to={`/fieldnotes/${post.slug}`}
						className="flex items-baseline gap-2 group"
					>
						<span className="text-sm text-[#111111] group-hover:text-[#666666] transition-colors shrink-0">
							{post.title}
						</span>
						<span className="flex-1 border-b border-dotted border-[#dddddd] mb-[3px]" />
						<span className="text-xs text-[#bbbbbb] shrink-0 tabular-nums">
							{format(new Date(post.date), 'MMM d, yyyy')}
						</span>
					</Link>
				</li>
			))}
		</ul>
	);
}

export default function FieldNotes() {
	const posts = getAllPosts();

	return (
		<section>
			<Helmet>
				<title>Field Notes | {metaData.name}</title>
				<meta
					name="description"
					content="Thoughts, ideas, and insights."
				/>
			</Helmet>
			<h1 className="mb-8 text-sm font-medium tracking-widest uppercase text-[#666666]">
				Field Notes
			</h1>
			<FieldNotesList posts={posts} />
		</section>
	);
}
