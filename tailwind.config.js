module.exports = {
  purge: [
'./src/**/*.html',
    './src/**/*.vue',
],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      height: {
        'xl': '50vh'
      },

      fontFamily:{
        nunito: ['Nunito Sans', 'sans-serif'],
        niccone: ['Niconne', 'cursive'],
        badscript: ['Bad Script', 'cursive'],
        olescript: ['Oleo Script', 'cursive'],
        birthstone: ['Birthstone', 'cursive'],
        damian: ['Damian', 'cursive'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ...
    require('@tailwindcss/line-clamp'),
  ],
}
