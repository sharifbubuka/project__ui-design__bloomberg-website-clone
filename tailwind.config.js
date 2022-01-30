module.exports = {
  darkMode: false,
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bloomberg: ['Bloomberg'],
        times: "TimesNewRoman",
        muli: "Muli",
        "hg-roman-55": "MHG-roman-55",
      },
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true
  }
};
