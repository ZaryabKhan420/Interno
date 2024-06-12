/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#282933",
      secondary: "#2A2F38",
      accent: "#CF9F74",
      white: "#fff",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans - serif"],
      Serif: ["DM Serif Text", "serif"],
    },
  },

  plugins: [],
};
