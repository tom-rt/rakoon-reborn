module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      1: "1rem",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
