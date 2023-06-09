/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tawny: {
          DEFAULT: '#7E481C',
        },
        tortilla: {
          DEFAULT: '#9A7B4F',
        },
        goldenrod: {
          DEFAULT: '#DAA520',
        },
        grey: {
          DEFAULT: '#808080',
          light: '#e8e8e8',
        },
      },
    },
  },
  plugins: [],
};
