module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'myBlack' : '#222222',
        'myCharcoal' : '#333333',
        'mySilver' : '#666666',
        'myWhite' : '#F7F7F7',
        'myEmerald' : '#4D9C2D',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}