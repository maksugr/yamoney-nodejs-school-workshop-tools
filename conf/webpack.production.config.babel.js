import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import Config from 'webpack-config';

export default new Config().extend('conf/webpack.base.config.babel.js').merge({
  module: {
    rules: [
      {
        test: /\.css$/,
        use:
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'postcss-loader',
            ]
          }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new UglifyJSPlugin({
      mangle: false,
      minimize: true
    }),
  ]
});
