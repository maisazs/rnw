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
        'white-2': '#F9FAF3',
        'white-3': '#D1D1D1',
        'black': '#000',

        'gray-1': '#9E9E9E',
        'gray-2': '#050505',
        'gray-3': '#101010',
        'gray-4': '#111111',
        'gray-5': '#696969',
        'gray-6': '#6E6E6E',
        'gray-7': '#868686',
        'gray-8': '#1A1A1A',
        'gray-9': '#3F3F3F',
        'gray-10': '#1C1C1C',
        'gray-11': '#202020',
        'gray-12': '#0D0D0D',
        'gray-13': '#7A7A7A',
        'gray-14': '#2B2B2B',
        'gray-15': '#898989',
        'gray-16': '#262626',
        'gray-17': '#0C0C0C',
        'gray-18': '#191919',
        'gray-19': '#2D2D2D',

        'primary-1': '#D8FA2D',
      },
    },
    backgroundImage: {
      'notebook': "url('./img/notebook.png')",
      'footer': "url('./img/bg-footer.png')"
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('not-hover', '&:not(:hover)');
    },
  ],
}

