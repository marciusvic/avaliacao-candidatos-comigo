/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'comigo-gray': '#F1F5F9',
        'comigo-blue': '#1169B0',
      },
    },
  },
  plugins: [],
}
