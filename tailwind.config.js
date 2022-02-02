const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        'warm-gray': colors.warmGray,
        teal: colors.teal,
      },
    },
  },
  plugins: [],
}
