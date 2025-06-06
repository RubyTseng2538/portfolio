/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EAEAEE',
        'secondary': '#8EB6DC',
        'textSecondary': '#1470AF',
        'white': '#FFFFFF',
        'black': '#000000',
      },
      fontFamily: {
        'marcellus': ['Marcellus', 'serif'],
      },
    },
  },
  plugins: [],
}

