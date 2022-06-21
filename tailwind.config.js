const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space Mono', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
