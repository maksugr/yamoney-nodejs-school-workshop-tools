module.exports = ({ types }) => {
  return {
    visitor: {
      Identifier(path) {
        const node = path.node;

        if (node.name === 'yamoney_nodejs_school') {
          path.replaceWith(types.stringLiteral('Yamoney Node.js School'));
        }
      }
    }
  };
};
