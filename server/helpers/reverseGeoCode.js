const geocoder = require('local-reverse-geocoder');

geocoder.init({
  load: {
    admin2: false,
    admin3and4: false,
    alternateNames: false,
  },
  dumpDirectory: 'geonames',
}, () => {
  console.log('Reverse geocoding is ready!');
  var point = {latitude: -71, longitude: 38};
  geocoder.lookUp(point, (err, res) => {
  console.log(JSON.stringify(res, null, 2));
  });
});

