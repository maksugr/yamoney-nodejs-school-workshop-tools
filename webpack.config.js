const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const NODE_ENV = process.env.NODE_ENV || 'dev';

module.exports = {
  entry: {
    index: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  devtool: NODE_ENV == 'dev' ? 'cheap-inline-module-source-map' : false,
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
        use: NODE_ENV == 'dev' ? [
            'style-loader',
            'css-loader',
            'postcss-loader',
        ] :
        ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
          ]
        })
      }
    ]
  },
	plugins: NODE_ENV == 'dev' ? [
      new HtmlWebpackPlugin({
        title: 'Yamoney Node.js School'
      }),
      new webpack.HotModuleReplacementPlugin(),
    ] : [
      new HtmlWebpackPlugin({
        title: 'Yamoney Node.js School'
      }),
      new ExtractTextPlugin('styles.css'),
      new UglifyJSPlugin({
        mangle: false,
        minimize: true
      }),
    ]
    ,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true
  }
};
