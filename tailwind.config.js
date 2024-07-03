/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      //Max-width
      m2xl: { max: "1535px" },

      mxl: { max: "1279px" },

      mlg: { max: "1023px" },

      mmd: { max: "767px" },

      msm: { max: "639px" },
      msmm: { max: "500px" },
      msmmm: { max: "450px" },

      //Min width

      smmm: { min: "450px" },
      smm: { min: "500px" },

      sm: { min: "640px" },

      md: { min: "768px" },

      lg: { min: "1024px" },

      xl: { min: "1280px" },
    },
  },
  plugins: [],
};
