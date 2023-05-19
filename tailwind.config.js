/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        googlesans: ["GoogleSans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        helvetica: ["helvetica", "sans-serif"],
      },
      colors: {
        primary: "#f9fbfd",
        toolbar: "#edf2fa",
        editor: "#ffffff",
        button: "#b2d7ef",
      },
    },
    debugScreens: {
      position: ["bottom", "left"],
      prefix: "screen: ",
    },
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("tailwindcss-brand-colors"),
  ],
};
