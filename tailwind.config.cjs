module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    screens: {
      "2xl": { max: "1536px" },

      xl: { max: "1280px" },

      lg: { max: "1024px" },

      md: { max: "768px" },

      sm: { max: "540px" },
    },
  },
  plugins: [],
};
