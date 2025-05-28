module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
     theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',     // dunkles Anthrazit
        accent: '#CBA27C',      // Terracotta
        bg: '#FAF9F6',          // Off-White
      },
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
  },
  plugins: [],
};
