import { Helmet } from "react-helmet-async";
import { bookmarks } from "@/data/bookmarks-data";
import { metaData } from "@/config";

export default function Bookmarks() {
  const categories = Array.from(new Set(bookmarks.map((b) => b.category)));

  return (
    <section>
      <Helmet>
        <title>Bookmarks | {metaData.name}</title>
        <meta name="description" content="Links worth saving." />
      </Helmet>
      <p className="text-sm text-[#666666] mb-8">
        Things worth saving. Updated as I find them.
      </p>
      <div className="space-y-10">
        {categories.map((category) => (
          <div key={category}>
            <h2 className="text-sm font-medium tracking-widest uppercase text-[#666666] mb-4">
              {category}
            </h2>
            <div>
              {bookmarks
                .filter((b) => b.category === category)
                .map((bookmark, index) => (
                  <a
                    key={index}
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-baseline justify-between gap-6 py-3 border-b border-[#e0e0e0] group"
                  >
                    <span className="text-sm font-medium text-[#111111] group-hover:text-[#666666] transition-colors shrink-0">
                      {bookmark.title}
                    </span>
                    <span className="text-sm text-[#999999] hidden sm:block text-right">
                      {bookmark.description}
                    </span>
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
