export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(222, 47%, 11%)",
        primary: "hsl(272, 40%, 58%)",
        cyan: "hsl(187, 95%, 43%)",
      },
      boxShadow: {
        neon: "0 0 20px hsl(272, 40%, 58%)",
      },
      backdropBlur: {
        glass: "12px",
      },
    },
  },
  plugins: [],
};
