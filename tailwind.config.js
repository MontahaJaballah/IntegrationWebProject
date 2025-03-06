module.exports = {
  content: [
   "./index.html",
   "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
      animation: {
        wiggle: "wiggle 0.8s ease-in-out infinite", // Changed from 0.4s to 0.8s
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'gradient-move': 'gradientMove 5s ease infinite',
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
 };