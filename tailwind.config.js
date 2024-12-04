/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'upurple': '#7B2CBF',
      }
    },
    fontFamily:{
      'jura':['Jura', 'sans-serif']
    }
  },
  plugins: [],
}

