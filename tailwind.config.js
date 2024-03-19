/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'pastel-yellow' : '#faedcb',
        'pastel-green' : '#c9e4de',
        'pastel-blue' : '#c6def1',
        'pastel-violet' : '#dbcdf0',
        'pastel-red' : '#f2c6de',
        'pastel-orange' : '#f7d9c4',
      },
      boxShadow: {
        'subtle-shadow': '0px 3px 15px rgba(0,200,0,0.2)',
      }
    },
  },
  plugins: [],
}