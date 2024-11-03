/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary': '#a6206c',
      'secondary': '#2c2c2c',
      'background': '#232323',
    },
    extend: {},
  },
  plugins: [],
}

