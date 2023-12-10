import _ from 'lodash';
import { myname } from './myName';
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    // Using the function from myName.js module
    element.textContent = myname('Jaunty')
    return element;
  }
  
  document.body.appendChild(component());
