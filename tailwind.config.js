/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors:{
      'klove': '#D21312',
      'maroon-light': '#F99B7D',  // maroon-light
      'peach-light':'#FFE5CA', // peach-light
      'peach-red':'#E76161', // peach-red
      'peach-lighter': '#FFF3E2',  // peach-lighter
      'peach-dark': '#FA9884', // peach-dark
      'maroon-dark':'#B04759', // maroon-dark
    },
  },
  plugins: [],
}
