/** @type {import('tailwindcss').Config} */
export default {
  mode:"jit",
  content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // hoặc 'media' nếu muốn tự động theo hệ thống
  theme: {
    extend: {},
  },
  plugins: [],
};
