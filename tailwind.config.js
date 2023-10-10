/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1520px',
    },
      padding: {
        DEFAULT: '1rem',
        sm: '40px',
        lg: '40px',
        xl: '60px',
        '2xl': '50px',
      },
    },
    fontSize: {
      sm: '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
      xl: '20px',
      '24': '24px',
      '26': '26px',
      '30': '30px',
      '35': '35px',
      '40': '40px',
      '45': '45px',
    },
    extend: {
      colors: {
        green: '#009196',
        'green-100': '#00767A1A',
        dark: '#2C2C2C',
        'dark-400': '#2C2C2C66',
        orange: '#FF6A28',
        'orange-100': '#FF6A2826',
        pink: '#FF005C'
      },
      userSelect: {
        'none': 'none',
      },
    },
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
      corm: ['Cormorant', 'serif'],
    }
  },
  plugins: [],
}
