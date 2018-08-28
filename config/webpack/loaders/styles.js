module.exports = {
  test: /\.(scss|sass)$/i,
  use: [
    {
      loader: 'vue-style-loader',
    }, {
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
      options: {
        // modules: true
        importLoaders: 1,
      }
    }, {
      loader: 'sass-loader',
    }, {
      loader: 'postcss-loader',
      options: { sourceMap: true }
    },
  ]
};
