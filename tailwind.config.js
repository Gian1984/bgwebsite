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
        'artexa-teal-400': '#51A29C',
        'artexa-teal-300': '#52E0D6',
        'artexa-teal-200': '#76FFF5',
        'artexa-red': '#FF7680',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
