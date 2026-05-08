/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F3A5F',
          hover: '#162C47',
          active: '#0F1F33',
        },
        success: {
          DEFAULT: '#6B8E23',
          light: '#E6F0D6',
        },
        accent: {
          DEFAULT: '#C96A3D',
          hover: '#A9552F',
          light: '#F3D2C2',
        },
        beige: '#F5E9DA',
        terracotta: '#C96A3F',
        navy: '#0F1F33',
      },
      fontFamily: {
        arabic: ['Cairo', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease both',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};