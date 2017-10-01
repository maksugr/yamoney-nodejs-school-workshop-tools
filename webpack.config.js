const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglyES = require('uglify-es-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'eslint-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [{loader: 'css-loader', options: { minimize: true }}, 'postcss-loader']
        })
      },{
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [{loader: 'css-loader', options: { minimize: true }}, 'postcss-loader', 'sass-loader']
        })
      }]
  },
  plugins: [
    new UglyES(),
    new HtmlWebpackPlugin({
      title: 'Yamoney Node.js School'
    }),
    new ExtractTextWebpackPlugin('styles.css')
  ]
};
