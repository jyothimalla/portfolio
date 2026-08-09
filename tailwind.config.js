/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00243d',      // deep navy — headings, dark sections
        primaryLight: '#0d3a57', // lighter navy for cards on dark bg
        accent: '#008e9e',       // teal — links, buttons, eyebrow text
        cream: '#efedea',        // warm off-white section background
        ink: '#00243d',
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
