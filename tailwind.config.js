/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F2ECE2",
        },
        beige: {
          DEFAULT: "#F5F5DC",
        },
        ivory: {
          DEFAULT: "#FFFFF0",
        },
        black: {
          DEFAULT: "#000000",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        nude: {
          DEFAULT: "#F2D2BD",
        },
      },
    },
  },
  plugins: [],
};
