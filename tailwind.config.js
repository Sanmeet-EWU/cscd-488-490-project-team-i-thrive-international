/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5', // Indigo
        secondary: '#06b6d4', // Teal
        accent: '#f59e0b', // Amber
        neutral: '#6b7280', // Gray
        backgroundLight: '#f9fafb', // Light Gray
        backgroundDark: '#1f2937', // Dark Gray
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        bounceSlow: 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'], // Updated default font
      },
    },
  },
  plugins: [],
};
