/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'double-background': "url('src/shared/assets/images/g142.png'), url('src/shared/assets/images/Group-2.png')",
      },
    },
  },
  plugins: [],
};
