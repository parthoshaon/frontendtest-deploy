/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0c0114",
        darkPurple: "#3E0563",
        golden: "#FA9706"
      }
    },
  },
  plugins: [],
}
