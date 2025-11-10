/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#0F172A',
        secondary: '#3B82F6',
        neonPink: '#FF2EF5',
        neonBlue: '#00F0FF',
        neonGreen: '#39FF14',
        neonYellow: '#F5FF2E',
        neonPurple: '#A259FF',
        neonBg: 'linear-gradient(135deg, #0F172A 0%, #3B82F6 60%, #FF2EF5 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-up': 'slideUp 0.26s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
