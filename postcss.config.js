module.exports = {
  plugins: {
    'postcss-import': {
      path: 'app/'
    },
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
  },
};