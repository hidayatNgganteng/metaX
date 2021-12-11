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
        blueCustom: "#00D1FF",
      },
      borderWidth: {
        3: "3px",
        6: "6px",
      },
      height: {
        "5px": "5px",
        "7px": "7px",
        "8px": "8px",
        "15px": "15px",
        "20px": "20px",
        "25px": "25px",
        "40px": "40px",
        "41px": "41px",
        "41.5px": "41.5px",
        "43px": "43px",
        "66px": "66px",
        "43vw": "43vw",
        "150px": "150px",
      },
      width: {
        "5px": "5px",
        "20px": "20px",
        "25px": "25px",
        "35px": "35px",
        "36px": "36px",
        "41px": "41px",
        "41.5px": "41.5px",
        "79px": "79px",
        "110px": "110px",
        "121px": "121px",
        "335px": "335px",
        "343px": "343px",
        "375px": "375px",
        "43vw": "43vw",
        "150px": "150px",
        "544px": "544px",
        "549px": "549px",
        "605px": "605px",
      },
      fontSize: {
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "16px": "16px",
        "18px": "18px",
        "24px": "24px",
      },
      margin: {
        "min-1px": "-1px",
        "2px": "2px",
        "min-4px": "-4px",
        "3px": "3px",
        "4px": "4px",
        "7px": "7px",
        "9px": "9px",
        "11px": "11px",
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "17px": "17px",
        "18px": "18px",
        "19px": "19px",
        "20px": "20px",
        "21px": "21px",
        "22px": "22px",
        "24px": "24px",
        "28px": "28px",
        "29px": "29px",
        "30px": "30px",
        "32px": "32px",
        "38px": "38px",
        "40px": "40px",
        "55px": "55px",
        "220px": "220px",
        "229px": "229px",
        "129px": "129px",
        "127px": "127px",
        "336px": "336px",
        "min-6px": "-6px",
      },
      padding: {
        "4px": "4px",
        "12px": "12px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "17px": "17px",
        "18px": "18px",
        "20px": "20px",
        "30px": "30px",
        "21px": "21px",
        "22px": "22px",
        "102px": "102px",
        "126px": "126px",
        "127px": "127px",
        "129px": "129px",
        "134px": "134px",
        "131px": "131px",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      borderRadius: {
        "20px": "20px",
        "10px": "10px",
        "12px": "12px",
      },
      lineHeight: {
        "2.2rem": "2.2rem",
      },
      letterSpacing: {
        "0.6px": "0.6px",
      },
      inset: {
        "22px": "22px",
        "27px": "27px",
        "4px": "4px",
        "3px": "3px",
        "127px": "127px",
        "120px": "120px",
        "129px": "129px",
        "16px": "16px",
        "15px": "15px",
        "min-9px": "-9px",
        "min-12px": "-12px",
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
