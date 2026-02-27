/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000',
        'card-bg': '#0f1115',
        'border-dark': '#1a1f25',
        'accent-green': '#00ff9d',       // основной неон-зелёный со скрина
        'accent-glow': 'rgba(0, 255, 157, 0.5)',
        'text-dim': '#8a8f99',
      },
      boxShadow: {
        'glow': '0 0 12px rgba(0, 255, 157, 0.4)',
      },
      borderRadius: {
        'large': '1.5rem',  // 24px как на карточках
      },
    },
  },
  plugins: [],
}