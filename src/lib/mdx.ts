import type { ComponentType } from 'react';

export type MDXComponent = ComponentType<{
	components?: Record<string, unknown>;
}>;

export type Post = {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	tags: string[];
	runtime?: string;
	wordCount: number;
};

type FrontmatterRecord = Record<
	string,
	{
		title: string;
		date: string;
		excerpt: string;
		tags: string[];
		runtime?: string;
		draft?: boolean;
	}
>;

// Eager import of frontmatter only — used by listing pages with zero MDX chunk overhead
const postFrontmatter = import.meta.glob('../../content/posts/**/*.mdx', {
	eager: true,
	import: 'frontmatter',
}) as FrontmatterRecord;

// Word count baked in at compile time by remarkWordCount plugin
const postWordCounts = import.meta.glob('../../content/posts/**/*.mdx', {
	eager: true,
	import: 'wordCount',
}) as Record<string, number>;

// Lazy import for MDX components — loaded on demand when visiting a post
const postModules = import.meta.glob('../../content/posts/**/*.mdx', {
	eager: false,
});

function pathToSlug(globKey: string): string {
	return globKey.replace('../../content/posts/', '').replace(/\.mdx$/, '');
}

export function readingTime(wordCount: number): string {
	const mins = Math.max(1, Math.ceil(wordCount / 200));
	return `${mins} min read`;
}

function buildIndex(): Post[] {
	return Object.entries(postFrontmatter)
		.filter(([, fm]) => !fm.draft)
		.map(([filePath, fm]) => {
			return {
				slug: pathToSlug(filePath),
				title: fm.title,
				date: fm.date,
				excerpt: fm.excerpt,
				tags: fm.tags ?? [],
				runtime: fm.runtime,
				wordCount: postWordCounts[filePath] ?? 0,
			};
		})
		.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPosts(): Post[] {
	return buildIndex();
}

export function getPostBySlug(slug: string): Post | null {
	return buildIndex().find((p) => p.slug === slug) ?? null;
}

export function getAllTags(): { tag: string; count: number }[] {
	const counts: Record<string, number> = {};
	getAllPosts().forEach((post) => {
		post.tags.forEach((tag) => {
			counts[tag] = (counts[tag] ?? 0) + 1;
		});
	});
	return Object.entries(counts)
		.map(([tag, count]) => ({ tag, count }))
		.sort((a, b) => a.tag.localeCompare(b.tag));
}

export function getPostsByTag(tag: string): Post[] {
	return getAllPosts().filter((p) => p.tags.includes(tag));
}

export function getAdjacentPosts(slug: string): {
	prev: Post | null;
	next: Post | null;
} {
	const posts = getAllPosts();
	const idx = posts.findIndex((p) => p.slug === slug);
	return {
		prev: idx > 0 ? posts[idx - 1] : null,
		next: idx < posts.length - 1 ? posts[idx + 1] : null,
	};
}

// Async loader — used by FieldNotesPost to get the compiled MDX component
export async function loadPostComponent(
	slug: string
): Promise<MDXComponent | null> {
	const key = `../../content/posts/${slug}.mdx`;
	const loader = postModules[key];
	if (!loader) return null;
	const mod = await (loader as () => Promise<{ default: MDXComponent }>)();
	return mod.default;
}
