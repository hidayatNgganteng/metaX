module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gradientColorStart: "#FF5C01",
        gradientColorStop: "#FFD25F",
        "white-50": "rgba(255, 255, 255, .5)",
        "white-30": "rgba(255, 255, 255, .3)",
        bgDark: "#121212",
        dark: "#1B1B1B",
      },
      borderWidth: {
        3: "3px",
        6: "6px",
      },
      height: {
        "25px": "25px",
        "40px": "40px",
        "15px": "15px",
        "20px": "20px",
        "66px": "66px",
      },
      width: {
        "25px": "25px",
        "335px": "335px",
        "35px": "35px",
        "20px": "20px"
      },
      fontSize: {
        "14px": "14px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
