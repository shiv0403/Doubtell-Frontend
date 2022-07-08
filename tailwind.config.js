/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Nexa"],
      regular: ["Nexa-Regular"],
      nexabold: ["Nexa-Bold"],
      nexablack: ["Nexa-Black"],
      book: ["Nexa-Book"],
    },
    textColor: {
      primary: "#2B2B2B",
      secondary: "#264E52",
      white: "#FFFFFF",
      coolGray: "#8493A8",
      lightGray: "#CAD3DF",
      gray: "#3F3F3F",
      black1: "#120C44",
      black: "#000000",
      warning: "#F9CF48",
      offWhite: "#e3e3e3",
      lightText: "#5C7A7D",
      red: "#ED4D19",
      alternate: "#f2faff",
    },
    extend: {
      height: {
        "80v": "80vh",
        "73v": "73vh",
        "60v": "60vh",
      },
      colors: {
        primary: "#2B2B2B",
        secondary: "#f4f4f4",
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
      padding: {
        10: "10px",
        11: "11px",
        15: "15px",
        20: "20px",
        30: "30px",
        40: "40px",
      },

      fontSize: {
        10: "10px",
        11: "11px",
        15: "15px",
        20: "20px",
        30: "30px",
        40: "40px",
      },
      width: {
        "100p": "100%",
        "95p": "95%",
        90: "90%",
        "85p": "85%",
        "80p": "80%",
        "70p": "70%",
        "60p": "60%",
        "50p": "50%",
        "40p": "40%",
        "30p": "30%",
        "25p": "25%",
        "20p": "20%",
        "15p": "15%",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // add this to your plugins
  ],
};
