import { useEffect, useState, type ComponentType } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { getAdjacentPosts, getPostBySlug, loadPostComponent } from "@/lib/mdx";
import { metaData } from "@/config";

export default function FieldNotesPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : null;
  const [PostComponent, setPostComponent] = useState<ComponentType | null>(
    null,
  );

  useEffect(() => {
    if (!slug || !post) return;
    loadPostComponent(slug).then(setPostComponent);
  }, [slug, post]);

  if (!post) return <Navigate to="/404" replace />;

  const { prev, next } = getAdjacentPosts(post.slug);

  return (
    <article>
      <Helmet>
        <title>
          {post.title} | {metaData.name}
        </title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <Link
        to="/fieldnotes"
        className="text-xs text-[#bbbbbb] hover:text-[#666666] transition-colors mb-8 block"
      >
        ← All Field Notes
      </Link>
      <p className="text-[#999999] text-sm mb-8">
        {format(new Date(post.date), "MMMM dd, yyyy")}
      </p>
      {post.tags && post.tags.length > 0 && (
        <div className="flex items-center gap-3 mb-8">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              to={`/fieldnotes/tags/${tag}`}
              className="text-xs text-[#999999] uppercase tracking-widest hover:text-[#111111] transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}
      <div className="prose prose-neutral max-w-none">
        {PostComponent ? (
          <PostComponent />
        ) : (
          <p className="text-[#999999]">Loading...</p>
        )}
      </div>

      <div className="mt-12 flex justify-between border-t border-[#e0e0e0] pt-8">
        {prev && (
          <Link
            to={`/fieldnotes/${prev.slug}`}
            className="text-sm text-[#666666] hover:text-[#111111] transition-colors"
          >
            ← {prev.title}
          </Link>
        )}
        {next && (
          <Link
            to={`/fieldnotes/${next.slug}`}
            className="text-sm text-[#666666] hover:text-[#111111] transition-colors ml-auto"
          >
            {next.title} →
          </Link>
        )}
      </div>
    </article>
  );
}
