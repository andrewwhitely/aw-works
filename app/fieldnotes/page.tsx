import { getAllPosts } from 'lib/mdx';
import { Suspense } from 'react';
import FieldNotesList from './FieldNotesList';

export const metadata = {
	title: 'Field Notes',
	description: 'Thoughts, ideas, and insights.',
};

export default async function FieldNotesPage() {
	const posts = await getAllPosts();

	return (
		<section>
			<h1 className='mb-8 text-sm font-medium tracking-widest uppercase text-[#666666]'>
				Field Notes
			</h1>
			<Suspense>
				<FieldNotesList posts={posts} />
			</Suspense>
		</section>
	);
}
