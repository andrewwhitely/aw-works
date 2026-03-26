import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMath from 'remark-math';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { visit } from 'unist-util-visit';
import { defineConfig } from 'vite';
import { resolve } from 'path';

function remarkWordCount() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return (tree: any) => {
		let count = 0;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		visit(tree, (node: any) => {
			if (node.type === 'text' || node.type === 'inlineCode') {
				count += node.value.trim().split(/\s+/).filter(Boolean).length;
			}
		});
		tree.children.unshift({
			type: 'mdxjsEsm',
			value: `export const wordCount = ${count}`,
			data: {
				estree: {
					type: 'Program',
					sourceType: 'module',
					comments: [],
					body: [
						{
							type: 'ExportNamedDeclaration',
							specifiers: [],
							source: null,
							declaration: {
								type: 'VariableDeclaration',
								kind: 'const',
								declarations: [
									{
										type: 'VariableDeclarator',
										id: { type: 'Identifier', name: 'wordCount' },
										init: {
											type: 'Literal',
											value: count,
											raw: String(count),
										},
									},
								],
							},
						},
					],
				},
			},
		});
	};
}

export default defineConfig({
	plugins: [
		{
			enforce: 'pre',
			...mdx({
				remarkPlugins: [
					remarkFrontmatter,
					remarkMdxFrontmatter,
					remarkWordCount,
					remarkMath,
				],
				rehypePlugins: [rehypeSlug, rehypeKatex],
			}),
		},
		react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	server: {
		proxy: {
			'/api': 'https://aw.works',
		},
	},
	build: {
		outDir: 'dist',
	},
});
