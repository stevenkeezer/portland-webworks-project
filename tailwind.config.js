// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#ecebff',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      ringOpacity: ['focus', 'active'],
      fontFamily: {
        roboto: ['Roboto Slab', 'serif'],
        'roboto-cond': ['Roboto Condensed', 'sans-serif'],
      },
      colors: {
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e1e5ea',
          400: '#ccccc',
          500: '#c3c3c3',
          600: '#757575',
          700: '#666666',
          800: '#333333',
          900: '#000000',
        },
        yellow: {
          100: '#f7f4ed',
          200: '#f0ebdd',
          300: '#d2b859',
          400: '#8c6910',
        },
        red: {
          500: '#E9261D',
        },
        blue: {
          100: '#ebf8ff',
          200: '#415a7b',
          300: '#35b0cb',
          400: '#93a4bd',
          500: '#0074c1',
          600: '#3068ad',
          700: '#225089',
          800: '#1b3a61',
          900: '#142b47',
        },
      },
    },
  },
  plugins: [],
};
