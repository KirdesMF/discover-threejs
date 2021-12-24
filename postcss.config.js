module.exports = {
  plugins: {
    'postcss-preset-env': {
      browsers: 'last 2 versions',
      autoprefixer: {},
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    },
  },
};
