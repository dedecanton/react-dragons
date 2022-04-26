module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "360px",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
            transform: "scale(0)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      colors: {
        primary: "#111827",
      },
      animation: {
        "fade-in": "fade-in 1s ease",
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
    },
  },
  plugins: [],
  purge: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
};
