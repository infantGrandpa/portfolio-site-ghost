/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/js/main.js","./**/*.{html,hbs}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'body': ['Montserrat', 'sans-serif']
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1350px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
