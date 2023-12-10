import _ from 'lodash';
import './style.css';
// import icon from './assets/icon.png';
import printMe from './print.js';

// import csv, xml
// import Data from './assets/data.csv';
// import Notes from './assets/data.xml';
// import { myname } from './myName';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
    
    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    // Using the function from myName.js module
    // element.textContent = myname('Jaunty')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // Add a css element to showcase bundling of css
    // element.classList.add('hello');
    btn.innerHTML = 'Click me';
    btn.onclick = printMe;
    element.appendChild(btn);
    // Add icon to showcase bundling of assets
    // const myIcon = new Image();
    // src method from the Image class extended from the HTMLImageElement interface
    // myIcon.src = icon;
    // element.appendChild(myIcon);

    // Logging Data to showcase bundling of .csv and .xml
    // console.log(Data);
    // console.log(Notes);

    return element;
  }
  
  document.body.appendChild(component());
