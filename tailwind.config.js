/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      mdl: '976px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      white: "#fff",
      black: "#000",
      lightGray: "#E9E9E9",
      darkBrown: "#940047",
      slateBlack: "#2C2C2C",
      lightOrange: "#F5841F"
    },
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans - serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}