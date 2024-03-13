const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      main: "'Montserrat', sans-serif",
      second: '"Plus Jakarta Sans", sans-serif',
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
