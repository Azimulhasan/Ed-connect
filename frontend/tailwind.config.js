/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
      colors:{
        "darkmode-bg-color": "#131318",
        "darkmode-solid-color": "var(--darkmode-solid-color)",
        "darkmode-accent-color": "var(--darkmode-accent-color)",
        "darkmode-accent-off-color": "var(--darkmode-accent-off-color)",
        "lightmode-bg-color": "var(--lightmode-bg-color)",
        "lightmode-solid-color": "var(--lightmode-solid-color)",
        "lightmode-accent-color": "var(--lightmode-accent-color)",
        "lightmode-accent-off-color": "var(--lightmode-accent-off-color)",
      }
    },
  },
  plugins: [],
}
