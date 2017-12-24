const path = require('path');
const webpack = require('webpack');

const sourcePath = path.join(__dirname, '../src');

module.exports = {
  context: sourcePath,
  entry: {
    app: 'index.jsx',
    vendor: [
      'react',
      'react-dom',
    ],
  },
  output: {
    path: path.join(__dirname, '../static/js/assets'),
    filename: '[name].bundle.js',
    chunkFilename: '[name]-chunk.js',
  },
  resolve: {
    modules: [
      'node_modules',
      sourcePath,
    ],
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: [
        /node_modules/,
        /__tests__/,
      ],
      loader: 'babel-loader',
    }, {
      test: /\.sass$/,
      exclude: /node_modules/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    }],
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunkName: 'vendor',
      filename: 'vendor.bundle.js',
    }),
  ],
};
