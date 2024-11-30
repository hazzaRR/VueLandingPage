/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tanNimbus: ['Tan Nimbus', 'sans-serif'], // Add Tan Nimbus font
      },
    },
    colors: {
      'primary': '#ffa889',
      'secondary': '#FF8256',
      'accent': '#ffbdcd',
      'neutral': '#fff6f0',
      'content': '#55433c'

    },
  },
  plugins: [],
}
