/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        xl: "4px 4px 30px 8px",
        "2xl": "3px 4px 35px 10px",
      },
    },
  },
  plugins: [],
};
