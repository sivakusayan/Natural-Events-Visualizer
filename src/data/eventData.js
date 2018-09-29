const axios = require('axios');

const eonetURL = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';

axios.get(eonetURL)
.then((response) => {
  console.log(response.data.events.length);
})
.catch((err) => {
  console.log('Something went wrong :(');
  console.log(err);
})