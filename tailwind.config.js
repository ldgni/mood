/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Satoshi", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
