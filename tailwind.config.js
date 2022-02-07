const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'warm-gray': colors.warmGray,
        teal: colors.teal,
        'artexa-white': '#f9f9f9',
        'artexa-teal-100': '#38a4b6',
        'artexa-teal-200': '#62b5b9',
        'artexa-teal-300': '#8dc7bd',
        'artexa-teal-400': '#b8d9c1',
        'artexa-red': '#f1404b',
      },
    },
  },
  plugins: [],
}
