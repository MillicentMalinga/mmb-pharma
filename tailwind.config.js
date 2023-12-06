const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '0.5rem',
        lg: '3rem',
        xl: '1rem',
        '2xl': '2rem',
      },
    },
    extend: {
      colors: {
        'mebami-blue': '#6C63FF', 

      }, 
      fontFamily: {
        'logo': ['Sacramento', 'cursive'],
      },
    },
  },
  plugins: [],
});