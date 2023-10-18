/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./dist/*.{html, jsx, js}",
    './components/*.{html,jsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

