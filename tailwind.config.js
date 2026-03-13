/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Enforcing specific slate/cyan tones if needed, but defaults are usually good.
        // Adding a custom 'slate-950' alias just in case it's not in the version (Tailwind 3 has it though).
      }
    },
  },
  plugins: [],
};
