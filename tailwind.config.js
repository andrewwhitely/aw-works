import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-instrument-sans)", "sans-serif"],
        serif: ["var(--font-fraunces)", "serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        secondary: "#666666",
        subtle: "#e0e0e0",
      },
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
    },
  },
  plugins: [typography],
};
