import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkMath from "remark-math";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkMath],
        rehypePlugins: [rehypeSlug, rehypeKatex],
      }),
    },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
  },
});
