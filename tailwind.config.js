/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spin_slow: 'spin_slow 6s linear infinite',
      },
      keyframes: {
        spin_slow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      colors: {
        darkTheme: '#11001f',
      },
    },
  },
  darkMode: 'class', // Changed to 'class' for toggling
};
