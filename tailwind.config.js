/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet' : '640px',
        'laptop' : '1024px',
        'deskop' : '1280px'
      }
    },
  },
  plugins: [],
}