// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // adjust based on your project
  ],
  theme: {
    extend: {
      keyframes: {
        draw: {
          '0%': { strokeDashoffset: '130' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        draw: 'draw 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
