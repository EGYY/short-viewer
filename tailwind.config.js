/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        header: "0px 1px 4px rgba(0, 0, 0, 0.25);",
        switch: "-4px 0px 4px rgba(0, 0, 0, 0.25);",
        teams: "0px 4px 4px rgba(0, 0, 0, 0.25);",
        timeline: "0px 2px 2px rgba(0, 0, 0, 0.25);",
      },
      colors: {
        gray: "#656565",
        "gray-blue": "#6886BD",
      },
      gridTemplateColumns: {
        90: "repeat(5400, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
