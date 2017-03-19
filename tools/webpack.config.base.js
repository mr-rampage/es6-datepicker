module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(bower_components|node_modules|\.spec\.js$)/,
      loader: 'babel',
    }],
  },
  output: {
    libraryTarget: 'umd',
    library: 'calendar',
  },
  resolve: {
    extensions: [
      '',
      '.js',
    ],
  },
};
