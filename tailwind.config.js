/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#020B43',
          hover: '#041070',
          active: '#010830',
        },
        secondary: '#F2EFE9',
        foggy: '#04D9B2',
        action: '#F26849',
      },
    },
  },
  plugins: [],
};