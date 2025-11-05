/** @type {import('tailwindcss').Config} */
module.exports = {
  // Use the class strategy so we can toggle dark mode via a `dark` class on <html>
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Use CSS variables for themeable colors so light/dark themes can override them
      colors: {
        primary: 'var(--color-primary)',
        charcoal: 'var(--color-charcoal)',
      },
    },
  },
  plugins: [],
}