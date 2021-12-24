module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      1: "1rem",
    },
    minWidth: {
      2: "2rem",
    },
    minHeight: {
      2: "2rem",
    },
    borderRadius: {
      full: "50%",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
