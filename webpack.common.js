/* global require, module  */
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpeg|jpg|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|ttf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [new htmlPlugin()],
};
