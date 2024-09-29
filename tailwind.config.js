/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'dark': '0 2px 5px 1px rgba(0, 0, 0, .4)',
      }
    },
  },
  plugins: [],
}

