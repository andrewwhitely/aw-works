import { Helmet } from "react-helmet-async";
import { friends } from "@/data/friends-data";
import { metaData } from "@/config";

export default function Friends() {
  return (
    <section>
      <Helmet>
        <title>Friends | {metaData.name}</title>
        <meta name="description" content="People worth knowing." />
      </Helmet>
      <p className="text-sm text-[#666666] mb-8">
        A handful of great folks to connect with.
      </p>
      <div>
        {friends.map((friend, index) => (
          <div
            key={index}
            className="flex items-baseline justify-between gap-4 py-3 border-b border-[#e0e0e0]"
          >
            <span className="text-xs text-[#bbbbbb] tabular-nums w-6 shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium text-[#111111] w-1/5">
              {friend.name}
            </span>
            {friend.description && (
              <span className="text-sm text-[#999999] flex-1 hidden sm:block">
                {friend.description}
              </span>
            )}
            {friend.url && (
              <a
                href={friend.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#999999] hover:text-[#111111] transition-colors flex-1 hidden sm:block"
              >
                {friend.url.replace(/(^\w+:|^)\/\//, "")}
              </a>
            )}
            {friend.url && (
              <a
                href={friend.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#999999] hover:text-[#111111] transition-colors shrink-0"
              >
                ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
