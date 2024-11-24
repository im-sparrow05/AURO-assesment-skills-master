/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-glow': '0 0 15px 5px #00df9a',
      },
    },
  },
  plugins: [],
};
