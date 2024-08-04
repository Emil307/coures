module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "4px 4px 4px 4px rgba(0, 0, 0, 0.05)",
        md: "2px 2px 2px 2px rgba(0, 0, 0, 0.05)",
      },
    },
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
