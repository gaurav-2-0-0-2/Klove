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
      fontFamily:{
          sans: ['var(--font-dancingscript)'],
      },
    },
    colors:{
      'white': "#FFFFFF",
      'klove': '#0D7817',
      'semi-bold-green': '#65C763',
      'semi-bold-green-dark': '#5BB88B',
      'fresh-green': '#7BCF6B',
      'vibrant-orange': '#FF7F50',
      'vibrant-orange-dark': '#FF885C',
      'dark-gray': '#5e5d5d',
    },
  },
  plugins: [],
}
