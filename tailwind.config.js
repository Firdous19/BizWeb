/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        custom: { max: "920px" },
        custom1: { max: '768px' },
      },
    },
  },
  plugins: [],
};
