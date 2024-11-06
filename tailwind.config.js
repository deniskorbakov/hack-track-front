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
      'black': '#121315',
      'gray': '#27292c',
      'gray-200': '#37383a',
      'gray-300': '#71767d',
    },
    extend: {},
  },
  plugins: [],
}

