/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './public/**/*.svg'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-instrument-sans)', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        secondary: '#666666',
        subtle: '#e0e0e0',
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
