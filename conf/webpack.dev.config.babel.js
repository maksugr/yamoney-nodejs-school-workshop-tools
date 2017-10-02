import webpack from 'webpack';
import path from 'path';
import Config from 'webpack-config';

export default new Config().extend('conf/webpack.base.config.babel.js').merge({
  devtool: 'cheap-inline-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
  ,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true
  }
});
