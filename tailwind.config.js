const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {

      animation: {
        bounce: 'bounce 1s ease-in-out infinite',
      },

      keyframes: {

        bounce: {
        '0%, 100%': {transform: 'translateX(-25%)', 'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'},
        '50%': {transform: 'translateX(0)', 'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'},
        }

      },

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
