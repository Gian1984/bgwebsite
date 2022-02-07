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
        'artexa-teal-400': '#38a4b6',
        'artexa-teal-300': '#62b5b9',
        'artexa-teal-200': '#8dc7bd',
        'artexa-teal-100': '#b8d9c1',
        'artexa-red': '#FF7680',
      },
    },
  },
  plugins: [],
}
