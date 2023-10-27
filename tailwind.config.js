/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      primary: {
        50: "#E3F2FD",
        100: "#BBDEFB",
        200: "#90CAF9",
        300: "#64B5F6",
        400: "#42A5F5",
        500: "#2196F3",
        600: "#1E88E5",
        700: "#1976D2",
        800: "#1565C0",
        900: "#0D47A1",
      },
      secondary: {
        100: "#FFE57F",
        200: "#FFD740",
        400: "#FFC400",
        700: "#FFAB00",
      },
      normal: {
        100: "#B9F6CA",
        200: "#69F0AE",
        400: "#00E676",
        700: "#00C853",
      },
      caution: {
        100: "#FF9E80",
        200: "#FF6E40",
        400: "#FF3D00",
        700: "#DD2C00",
      },
      gray: {
        50: "#ECEFF1",
        100: "#CFD8DC",
        200: "#B0BEC5",
        300: "#90A4AE",
        400: "#78909C",
        500: "#607D8B",
        600: "#546E7A",
        700: "#455A64",
        800: "#37474F",
        900: "#263238",
      },
      bg: "#F4F7F9",
      white: "#FFFFFF",
      black: "#000000",
    },
    screens: {
      mob: { max: "767px" },
      tab: { max: "1023px" },
      desk: { min: "1024px" },
      display: { min: "1440px" },
    },
    extend: {
      fontFamily: {},
    },
  },
  plugins: [],
};
