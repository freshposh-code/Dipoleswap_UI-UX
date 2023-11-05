/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
      },

      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },

      screens: {
        xm: "330px",
        xr: "407px",
        xs: "480px",
        ss: "620px",
        sm: "780px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};