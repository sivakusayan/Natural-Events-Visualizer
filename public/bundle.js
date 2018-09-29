const geocoder = require('local-reverse-geocoder');
 
// With just one point
const point = {latitude: 42.083333, longitude: 3.1};
console.log('Looking up');
geocoder.lookUp(point, function(err, res) {
  console.log(JSON.stringify(res, null, 2));
});