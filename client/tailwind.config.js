/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'red' : '#DC0000',
      'white' : '#FFFFFF'
    },
    fontFamily: {
      'prompt' : 'Prompt, sans-serif'
    },
    extend: {},
  },
  plugins: [],
}
