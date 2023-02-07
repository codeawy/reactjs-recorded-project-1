/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      gridTemplateColumns: {
        "products-grid": "repeat(auto-fill, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
