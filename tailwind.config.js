const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e8f9ef",
          200: "#bceecf",
          300: "#8fe3ae",
          400: "#62d78e",
          500: "#35cc6e",
          600: "#29a156",
          700: "#1d743e",
          800: "#124726",
          900: "#003b1b",
        },
        secondary: {
          100: "#fcf2dd",
          200: "#f7dca4",
          300: "#f2c66c",
          400: "#edb034",
          500: "#d69613",
          600: "#a2720e",
          700: "#6f4e0a",
          800: "#3b2905",
          900: "#080501",
        },
        background: {
          100: "#fffbe7",
          200: "#f9f5b4",
          300: "#f4ef81",
          400: "#f0e84d",
          500: "#ebe11a",
          600: "#bcb410",
          700: "#88830c",
          800: "#555107",
          900: "#212003",
        },
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Gelasio", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {},
  plugins: [],
}
