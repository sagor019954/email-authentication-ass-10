/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  }, daisyui: {
    themes: [
      {
        mytheme: {

          primary: "#fef08a",

          secondary: "#d15987",

          accent: "#f9a781",

          neutral: "#222835",

          "base-100": "#f3f4f6",

          info: "#2D96E6",

          success: "#5FDD9C",

          warning: "#F3CE68",

          error: "#F52469",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
