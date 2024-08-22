const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1920px'
    },
    extend: {
      colors: {
        primary: {
          light: '#AE7DDD',
          DEFAULT: process.env.PRIMARY_COLOR || '#7F54B2',
          dark: '#754fa3',
        },
        white: '#FFFFFF',
        black: '#222222',
        dovegray: {
          DEFAULT: '#707070',
          50: '#CCCCCC',
          100: '#C2C2C2',
          200: '#ADADAD',
          300: '#999999',
          400: '#848484',
          500: '#707070',
          600: '#545454',
          700: '#383838',
          800: '#1C1C1C',
          900: '#000000',
          950: '#000000'
        },
        westar: {
          DEFAULT: '#DCD8D1',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#EEECE8',
          500: '#DCD8D1',
          600: '#C4BDB1',
          700: '#ACA291',
          800: '#938771',
          900: '#746A58',
          950: '#645C4C'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Poppins', 'serif'],
        reeniebeanie: ['Reenie Beanie', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function({ addComponents }) {
      addComponents({
        '.text-primary-dark': {
          color: '#746A58'
        },
        '.bg-primary-dark': {
          backgroundColor: '#746A58'
        },
        '.blur-xl': {
          filter: 'blur(2px) !important'
        },
        '.red-badge': {
          background: '#000 linear-gradient(0deg, #938771, #938771) !important'
        }
      })
    })
  ],

}
