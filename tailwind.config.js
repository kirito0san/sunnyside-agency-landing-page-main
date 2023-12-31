/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/scripts.js", "./index.html"],
  theme: {
    extend: {
      colors: {
        Soft_red: "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        Dark_desaturated_cyan: "hsl(167, 40%, 24%)",
        Dark_blue: "hsl(198, 62%, 26%)",
        Dark_moderate_cyan: "hsl(168, 34%, 41%)",
        Very_dark_desaturated_blue: "hsl(212, 27%, 19%)",
        Very_dark_grayish_blue: " hsl(213, 9%, 39%)",
        Dark_grayish_blue: "hsl(232, 10%, 55%)",
        Grayish_blue: " hsl(210, 4%, 67%)",
        White: " hsl(0, 0%, 100%)",
      },
      fontFamily: {
        Barlow: ['Barlow', `sans-serif`],
        Fraunces: ['Fraunces', `serif`],
      },

    },
  },
  plugins: [],
}

