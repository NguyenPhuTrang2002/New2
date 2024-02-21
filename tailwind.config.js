/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ss': '10px', // Định nghĩa breakpoint 'ss' với giá trị là 20px
      },
      utilities: {
        'ss': '10px',
      },
    },
  },
  plugins: [],
};
