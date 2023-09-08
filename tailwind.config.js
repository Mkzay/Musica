/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html", "./*.js"],
  theme: {
    extend: {
      spacing: {
        '14': '3.2rem',
      },
      colors: {
        'dark-white': '#FFFFFF',
        'white-alt': '#FFF',
        'dark-alt': '#1A1E1F',
        'dark': '#1D2123',
        'light': '#EFEEE0',
        'secondary': '#FACD66',
        'bluey': '#609EAF',
        'light': '#EFEEE0'
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      height: {
        '56': '233px'
      },
      borderRadius: {
        'xl': '20px',
      }
    },
  },
  plugins: [],
}

