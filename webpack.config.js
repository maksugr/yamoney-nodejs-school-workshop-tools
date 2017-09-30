const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: ['./src/index.js']
  },
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
				// use: ExtractTextPlugin.extract({
				// 	fallback: 'style-loader',
				// 	use: [
         //    'css-loader',
         //    'postcss-loader',
         //  ]
				// })
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ]
			}
    ]
  },
	plugins: [
    new HtmlWebpackPlugin({
      title: 'Yamoney Node.js School'
    }),
		new ExtractTextPlugin("styles.css", { disable: true }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true
  }
};
