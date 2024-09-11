/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'comigo-gray': '#F1F5F9',
        'comigo-blue': '#1169B0',
        'comigo-blue-nav': '#1169B0',
        'comigo-divisor': '#DDDDDD',
      },
    },
  },
  plugins: [],
}
