/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["templates/*.html", "./node_modules/flowbite/**/*.js","templates/*.js"],
  theme: {
    extend: {

    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },

    require("flowbite/plugin"),
  ],
};
