/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // or ./pages/** if you're using Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  script: ['var(--font-script)'],
  poppins: ['var(--font-poppins)'],
  aboreto: ['var(--font-aboreto)'],
  afacad: ['var(--font-afacad)'],
  playfair: ['var(--font-playfair)'],
  alike: ['var(--font-alike)'],
  alikeAngular: ['var(--font-alike-angular)'],
},
    },
  },
  plugins: [],
};
