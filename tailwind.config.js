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
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
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
