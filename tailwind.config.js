/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark Mode (padrão)
        dark: {
          bg: '#1A202C',
          text: '#F7FAFC',
          accent: '#3182CE',
          success: '#48BB78',
        },
        // White Mode
        light: {
          bg: '#FFFFFF',
          text: '#2D3748',
          accent: '#3182CE',
          success: '#48BB78',
        },
        // Cores do QA Play
        qaplay: {
          blue: '#3182CE',
          green: '#48BB78',
          darkbg: '#1A202C',
          lightbg: '#FFFFFF',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'heading-lg': ['48px', { lineHeight: '1.2', fontWeight: 'bold' }],
        'heading-md': ['36px', { lineHeight: '1.2', fontWeight: 'bold' }],
        'heading-sm': ['24px', { lineHeight: '1.2', fontWeight: 'bold' }],
        'body': ['16px', { lineHeight: '1.5' }],
        'small': ['12px', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

