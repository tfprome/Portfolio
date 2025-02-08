/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s steps(2, start) infinite",
      },
      keyframes: {
        blink: {
          "100%": { opacity: 1 },
          "0%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

