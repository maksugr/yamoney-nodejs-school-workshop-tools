import './styles.css';
import printMe from './print';
import alertInFive from './alert';

// eslint-disable-next-line no-console
console.log(`Hello, ${yamoney_nodejs_school}!`);
alertInFive();

//HMR
if (module.hot) {
  module.hot.accept('./print.js', function () {
    // eslint-disable-next-line no-console
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}