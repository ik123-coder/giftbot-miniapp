/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#00ff9d',
        'dark-bg': '#000000',
        'card': '#0f1115',
        'border-dark': '#1a1f25',
      },
      borderRadius: {
        'xl2': '1.25rem',
      },
      boxShadow: {
        'glow': '0 0 12px rgba(0, 255, 157, 0.4)',
      },
    },
  },
  plugins: [],
}