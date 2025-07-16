/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },

      screens: {
        'xs': '375px',        // iPhone SE and small phones
        'sm': '640px',        // Large phones / small tablets
        'md': '768px',        // Tablets
        'lg': '1024px',       // Small laptops
        'xl': '1280px',       // Desktop
        '2xl': '1536px',      // Large desktop
        '3xl': '1920px',      // Ultra-wide screens
        
        // Special breakpoints for foldable devices
        'fold-closed': '320px',   // Galaxy Z Fold closed
        'fold-open': '1768px',    // Galaxy Z Fold unfolded
        'fold-tablet': '832px',   // Galaxy Z Fold tablet mode
        
        // Custom ranges
        'mobile-only': {'max': '767px'},
        'tablet-only': {'min': '768px', 'max': '1023px'},
        'desktop-only': {'min': '1024px'},
      }, 
    },
  },
  plugins: [],
}