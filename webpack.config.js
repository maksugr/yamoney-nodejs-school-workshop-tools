const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/webpack'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        use: ExtractTextPlugin.extract(['css-loader', 'csso-loader','postcss-loader'])
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'Yamoney Node.js School'}),
    new ExtractTextPlugin('style.css'),
    new MinifyPlugin()
  ]
};
