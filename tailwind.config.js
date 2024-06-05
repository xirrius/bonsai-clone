/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#333333",
        secondary: "#767676",
        tertiary: "#4C525A",
        highlight: "#01B289",
        secondaryhighlight: "#00A37E",
        tertiaryhighlight: "#00B98F",
        dimBlue: "#FBFCFF",
        mainBlue: "#F2FAFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

