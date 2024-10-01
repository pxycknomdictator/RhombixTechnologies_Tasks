/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        c_small: "520px",
        c_medium: "760px",
      },
    },
  },
  plugins: [],
};
