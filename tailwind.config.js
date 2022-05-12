module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '126': '26rem',
        '128': '28rem',
        '130': '36rem',
      },
      
    },
  },
  variants: {
    extend: {
      backGroundColor: ['checked'],
    },
  },
  plugins: [],
}