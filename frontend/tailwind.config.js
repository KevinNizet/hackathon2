/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titles: ["New Rocker", "serif"],
        texts: ["serif"],
      },
      backgroundImage: {
        wallpaper: "url(./src/assets/backgroundpaper2.jpg)",
        banderole: "url(./src/assets/banderolenavbar.jpg)",
      },
    },
  },
  plugins: [],
};
