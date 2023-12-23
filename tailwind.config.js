/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Add custom keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        flipUp: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
        // You can add more custom animations here
      },
      // Add custom animation utilities
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        flipUp: 'flipUp 1s ease-in-out',
        // You can reference the keyframes you've just created
      },
    },
  },
  plugins: [],
};
