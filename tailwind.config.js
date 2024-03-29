/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      'transparent': 'transparent',
      // 'primary': 'linear-gradient(180deg, #18051D 18.8%, #180B34 100%)',
      'primary': '#F41972',
      'secondary': '#94A3B8',
      'classic': '#F8FAFC',
      'important': '#F79C41',
      'dark-blue': '#282E62',
      'white': '#ffffff',
      'dark': '#000000',
      'success': '#2D7D46',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
