module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      2: "2rem",
    },
    maxWidth: {
      1: "1rem",
      1.5: "1.5rem",
      2: "2rem",
      4: "4rem",
      "80-p": "80%",
    },
    minHeight: {
      2: "2rem",
    },
    maxHeight: {
      1: "1rem",
      1.5: "1.5rem",
      2: "2rem",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
