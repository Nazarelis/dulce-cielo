/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        merriweather: ['Merriweather', 'serif'],
        euphoria: ['Euphoria Script', 'serif']
      },
      borderRadius:{
        default: "40px",
      }
    },
  },
  plugins: [],
};

