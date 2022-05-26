module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
      sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      md: { min: '898px', max: '1250px' }, // Tablet (matches max: iPad Pro @ 1112px).
      lg: { min: '1251px' }, // Desktop smallest.
      xl: { min: '1159px' }, // Desktop wide.
      xxl: { min: '1359px' } // Desktop widescreen.
    },
  },
  plugins: [],
}
