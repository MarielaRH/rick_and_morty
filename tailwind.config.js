/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        ssm: "490px",
      },
      colors: {
        "gray-light": "#292a2e",
        "gray-deep": "#1e1e20",
        "yellow-light": "#F2DF80",
        "green-lemon": "#a4cc38",
        "green-ment": "#60bf81",
        violet: "#977EF2",
        "violet-light": "#8190F8",
        "blue-deep": "#498CDA",
        turquoise: "#038C8C",
        "turquoise-light": "#6FBFB1",
        "white-bone": "#e4e9f2",
      },
    },
  },
  plugins: [],
};
