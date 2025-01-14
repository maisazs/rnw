/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roobert: ['Roobert', 'sans-serif'],
      },
      
      colors: {
        'white': '#fff',
        'black': '#000',

        'gray-1': '#9E9E9E',
        'gray-2': '#050505',
        'gray-3': '#101010',
        'gray-4': '#111111',
        'gray-5': '#696969',
        'gray-6': '#6E6E6E',
        'gray-7': '#868686',
        'gray-8': '#1A1A1A',

        'primary-1': '#D8FA2D',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('not-hover', '&:not(:hover)');
    },
  ],
}

