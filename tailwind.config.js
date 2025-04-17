/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // or ./pages/** if you're using Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aboreto: ['var(--font-aboreto)'],
        poppins: ['var(--font-poppins)'],
        afacad: ['var(--font-afacad)'],
        splash: ['var(--font-splash)'],
      },
    },
  },
  plugins: [],
};
