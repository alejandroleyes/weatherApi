module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      red: {
        light: "#b90504",

        dark: "#990100",
      },
      white: {
        light: "#f6f6f6",

        dark: "#e8e8e8",

        rose: "#e9f5db",
      },
      black: {
        light: "#333333",
      },
      blue: {
        light: "#1a759f",
      },
      green: {
        dark: "#52b69a",
        light: "#99d98c",
        lightx2: "#d9ed92",
        dark2: "#181818",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
