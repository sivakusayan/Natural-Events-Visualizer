// import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles/styles.scss';

// ReactDOM.render(<p>This is my boilerplate</p>, document.getElementById('app'));

var geocoder = require('local-reverse-geocoder');
 
// With just one point
var point = {latitude: 42.083333, longitude: 3.1};
geocoder.lookUp(point, function(err, res) {
  console.log(JSON.stringify(res, null, 2));
});