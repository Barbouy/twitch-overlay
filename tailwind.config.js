module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    // Colors are not mandatory. You can add your own custom colors.
    colors: {
      'background': '#1E1E1E',
      'card': '#151518',
      'subtitle': '#999999',
      'title': '#FFFFFF',
      'gold': '#F2B33A',
      'twitter': '#00ACEE',
      'twitch': '#6441A5',
      'strawberry': '#E15554'
    }
  },
  plugins: [],
}