/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        palebrown: "#FFFBE9",
        lightbrown: "#E3CAA5",
        darkbrown: "#AD8B73",
        white: "#FFFFFF",
        coolGray: "#8493A8",
        lightGray: "#CAD3DF",
        gray: "#3F3F3F",
        black1: "#120C44",
        black: "#000000",
        warning: "#F9CF48",
        offWhite: "#e3e3e3",
        lightText: "#5C7A7D",
        back: "#F2F4F5",
        navbar: "#F7F8F9",
        red: "#ED4D19",
        alternate: "#f2faff",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // add this to your plugins
  ],
};
