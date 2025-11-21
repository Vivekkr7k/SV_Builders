/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1E3A8A",
        "primary-blue": "#1E3A8A",
        "accent-yellow": "#FFB800",
        "accent-orange": "#FF8C00",
        "background-light": "#F8F9FA",
        "background-dark": "#0F172A",
        "light-taupe": "#F1F5F9",
        "dark-charcoal": "#0F172A",
        "creamy-white": "#F8F9FA",
        "text-light": "#0F172A",
        "text-dark": "#F8F9FA",
        "accent": "#FFB800",
        "accent-beige": "#E2E8F0",
        "accent-gold": "#FFB800",
        "soft-beige": "#F8FAFC",
        "warm-gray": "#CBD5E1",
        "rose-gold": "#FF8C00",
        "rose-light": "#FFE5B4",
        "rose-dark": "#FF8C00"
      },
      fontFamily: {
        "sans": ["Montserrat", "sans-serif"],
        "display": ["Montserrat", "sans-serif"],
        "body": ["Montserrat", "sans-serif"],
        "serif": ["Montserrat", "sans-serif"],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        '3xl': ['1.875rem', { lineHeight: '1.4' }],
        '4xl': ['2.25rem', { lineHeight: '1.3' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
