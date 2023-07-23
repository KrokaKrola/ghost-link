const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: {
        DEFAULT: '#8b3c7f',
        50: '#fdf6fd',
        100: '#faedfa',
        200: '#f4daf3',
        300: '#eabde6',
        400: '#dc96d4',
        500: '#c96cbf',
        600: '#ac4d9f',
        700: '#8b3c7f',
        800: '#74346a',
        900: '#602f56',
        950: '#3d1535',
      },
      secondary: '#7fc88a',
      secondaryDark: '#3c8b48',
      important: '#c12600',
      text: '#000',
      icons: '#6d5ed1',
    },
  },
  plugins: [],
};
