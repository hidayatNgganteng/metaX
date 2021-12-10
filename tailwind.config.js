module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gradientColorStart: "#FF5C01",
        gradientColorStop: "#FFD25F",
        bgDark: "#121212",
        dark: "#1B1B1B",
        borderGray: "#1F1F1F",
        borderTabGray: "#929292",
        "white-50": "rgba(255, 255, 255, .5)",
        "white-30": "rgba(255, 255, 255, .3)",
        "white-05": "rgba(255, 255, 255, .05)",
        "black-20": "rgba(0, 0, 0, .2)",
        yellowCustom: "#FF9B33",
        grayText: "#B2B2B2",
      },
      borderWidth: {
        3: "3px",
        6: "6px",
      },
      height: {
        "15px": "15px",
        "20px": "20px",
        "25px": "25px",
        "40px": "40px",
        "66px": "66px",
        "43vw": "43vw",
        "150px": "150px",
      },
      width: {
        "20px": "20px",
        "25px": "25px",
        "35px": "35px",
        "79px": "79px",
        "335px": "335px",
        "343px": "343px",
        "375px": "375px",
        "43vw": "43vw",
        "150px": "150px",
      },
      fontSize: {
        "14px": "14px",
      },
      margin: {
        "21px": "21px",
        "30px": "30px",
        "220px": "220px",
      },
      padding: {
        "18px": "18px",
        "20px": "20px",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      borderRadius: {
        "20px": "20px",
        "10px": "10px",
      },
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "960px",
      // => @media (min-width: 960px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
