const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const mainConfig = require('./webpack.config.js');

module.exports = merge(mainConfig, {
  plugins: [
    new UglifyJSPlugin(),
  ],
});
