/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite",
        "spin-slow": "spin 1.5s linear infinite reverse",
      },
      colors: {
        darkPurple: "#330c2f",
        purple: "#7b287d",
        periwinkle: "#cfbff7",
        teaRoseRed: "#cfb1b7",
      },
    },
  },
  plugins: [],
};
