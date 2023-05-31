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
      'nav-bar-clr': '#F99B7D',
      'signup-btn-clr':'#FFE5CA',
      'login-btn-clr':'#E76161',
      'body-clr': '#FFF3E2',
      'write-btn-clr': '#FA9884',
      'post-btn-clr':'#B04759',
    },
  },
  plugins: [],
}
