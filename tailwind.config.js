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
        "background-light": "#F8F9FA",
        "background-dark": "#0F172A",
        "light-taupe": "#F1F5F9",
        "dark-charcoal": "#0F172A",
        "creamy-white": "#F8F9FA",
        "text-light": "#0F172A",
        "text-dark": "#F8F9FA",
        "accent": "#F1F5F9",
        "accent-beige": "#E2E8F0",
        "accent-gold": "#2563EB",
        "soft-beige": "#F8FAFC",
        "warm-gray": "#CBD5E1",
        "rose-gold": "#1E40AF",
        "rose-light": "#DBEAFE",
        "rose-dark": "#1E40AF"
      },
      fontFamily: {
        "display": ["Montserrat", "sans-serif"],
        "body": ["Montserrat", "sans-serif"],
        "serif": ["Montserrat", "sans-serif"],
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
