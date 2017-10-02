import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Config from 'webpack-config';

export default new Config().merge({
  entry: {
    index: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'eslint-loader',
          'babel-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Yamoney Node.js School'
    }),
  ]
});
