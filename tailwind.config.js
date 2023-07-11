/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    './assets/*.liquid',
  './config/*.json',
  './layout/*.liquid',
  './sections/*.liquid',
  './templates/*.liquid',
  './templates/*.json',
  './snippets/*.json',
], 
  theme: {
    extend:{
    'Compacta':['Compacta','Assistant', 'sans-serif'],
    'Kepler': ['Kepler'],
    'Tungsten-Book': ['Tungsten-Book'],
    'KeplerLight': ['KeplerLight']
    },
    screens:{
      'xs': '300px',
      'sm': '640px',
      'md': '768px',
      'me': '900px',
      'lg': '1024px',
      'xl': '1280px',
     '2xl': '1536px'

     },
    extend: {},
  },
  plugins: [],
}