module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#853737",
            },
            p: {
              color: "rgba(29,29,29,.7)",
              lineHeight: "1.8rem",
              fontWeight: "300",
            },
            h4: {
              color: "#4b5563",
              fontWeight: "600",
            },
            li: {
              color: "rgba(29,29,29,.7)",
              lineHeight: "1.8rem",
              fontWeight: "300",
            },
          },
        },
      },
      fontFamily: {
        body: ["Rubik"],
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
