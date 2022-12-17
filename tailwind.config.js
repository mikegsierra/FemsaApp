/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#334ffa',
        secondary: '#CFD6FF',
        'light-gray': '#f8f8f8',
        'mid-gray': '#9B9898',
      },
    },
  },
  plugins: [],
};
