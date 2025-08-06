// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // или "media" — если хочешь авто-темную
  theme: {
    extend: {
      colors: {
        primary: "#4ade80", // зелёный
        secondary: "#1e40af", // синий
        accent: "#f43f5e", // розовый
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        title: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
