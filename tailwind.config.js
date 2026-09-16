/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060F1F",
          900: "#0A1B34",
          800: "#0F2A4D",
          700: "#173C69",
          600: "#22508A",
        },
        gold: {
          600: "#A6791E",
          500: "#C9A227",
          400: "#D9B84E",
          300: "#E8CD82",
          100: "#F7EDCF",
        },
        cream: "#FBF8F1",
        ink: "#161C26",
        muted: "#5C6472",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,27,52,0.06), 0 12px 32px -16px rgba(10,27,52,0.25)",
        gold: "0 12px 30px -12px rgba(201,162,39,0.55)",
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #0A1B34 0%, #0F2A4D 55%, #173C69 100%)",
      },
    },
  },
  plugins: [],
};
