/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        YELLOW:'#ff9f1c',
        RED:'#ff4040',
        GREEN:'#2ec4b6',
        GREY:'#1b2329',
        DARK_GREY:'#0a1014',
        MID_GREY:'#353f4c',
        LIGHT_GREY:'#7a8c99',
        WHITE:'#fff',
       
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        "sans": ["'Roboto'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
