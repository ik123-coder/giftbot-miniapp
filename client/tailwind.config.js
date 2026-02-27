/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#00ff9d',
        'dark-bg': '#000000',
        card: '#0f1115',
        'border-dark': '#1a1f25',
        'text-dim': '#8a8f99',
      },
      boxShadow: {
        glow: '0 0 12px rgba(0, 255, 157, 0.4)',
      },
      borderRadius: {
        large: '1.5rem',
      },
    },
  },
  plugins: [],
}