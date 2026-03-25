export type Bookmark = {
  title: string;
  url: string;
  description: string;
  category: string;
};

export const bookmarks: Bookmark[] = [
  {
    title: "Bookmark title",
    url: "https://example.com",
    description: "Short description of why this is worth reading.",
    category: "design",
  },
  {
    title: "Bookmark title",
    url: "https://example.com",
    description: "Short description of why this is worth reading.",
    category: "engineering",
  },
  {
    title: "Bookmark title",
    url: "https://example.com",
    description: "Short description of why this is worth reading.",
    category: "tools",
  },
  {
    title: "Bookmark title",
    url: "https://example.com",
    description: "Short description of why this is worth reading.",
    category: "reading",
  },
];
