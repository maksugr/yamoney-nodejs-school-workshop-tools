const postcss = require('postcss');

// eslint-disable-next-line no-unused-vars
module.exports = postcss.plugin('postcss-yamoney-nodejs-school', (options = {}) => {
    return (css) => {
        css.walkRules((rule) => {
            rule.walkDecls((decl) => {
              if (decl.prop === 'yamoney-nodejs-school') {
                decl.replaceWith(postcss.decl({prop: 'content', value: decl.value}));
              }
            });
        });
    };
});
