module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#3FB27F'
        },
        bg: {
          dark: '#282c34',
        }
      },
    },
  },
  plugins: [],
};
