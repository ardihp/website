module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      fredoka: "'Fredoka', sans-serif",
      manrope: "Manrope, sans-serif",
      korean: "Korean",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
