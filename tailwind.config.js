/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      backgroundColor: {
        primary: "#f5f1eb",
        secondary: "#bdc2ff",
        tertiary: "#fed9fd",
        quaternary: "#392e4f",
        quinary: "#ede7e0",
      },
      textColor: {
        primary: "#392d50",
        secondary: "#bdc2ff",
        accent: "#e8ff54",
      },
      fontFamily: {
        sans: ["Verdana", "sans-serif"],
        special: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
