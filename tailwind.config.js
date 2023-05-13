module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        violet: '#8155BA',
        ebony: '#281C2D',
        'purple-haze': '#BEAFC2',
        'port-purple': '#695E93'
      },
      borderColor: (theme) => ({
        ...theme('colors')
      })
    }
  },
  plugins: []
}
