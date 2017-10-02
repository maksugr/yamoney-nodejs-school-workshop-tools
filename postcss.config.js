module.exports = {
  plugins: [
    require('stylelint'),
    require('./postcss-yamoney-nodejs-school'),
    require('autoprefixer')({
      browsers: ['> 1%', 'last 2 versions', 'ie>=11']
    }),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }]
    }),
  ]
}
