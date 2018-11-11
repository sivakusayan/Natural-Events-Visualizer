const db = require('../../db/mongoose');
const Event = require('../../models/Event');

const updateLineString = (oldLineString, newInformation) => {
  Event.findByIdAndUpdate(oldLineString._id, {
    $set: {
      'geometry.coordinates': oldLineString.geometry.coordinates.concat(newInformation.coordinates),
      'geometry.location': oldLineString.geometry.location.concat(newInformation.location),
      // No need to concat date since we just took live LineString's dates
      'geometry.date': newInformation.date,
    },
  });
};

const updatePoint = (oldPoint, newInformation) => {
  Event.findByIdAndUpdate(oldPoint._id, {
    $set: {
      // Event is now over time, convert to LineString
      'geometry.type': 'LineString',
      // Need to wrap coordinates of point in array to convert to LineString
      'geometry.coordinates': [oldPoint.geometry.coordinates].concat(newInformation.coordinates),
      'geometry.location': oldPoint.geometry.location.concat(newInformation.location),
      // No need to concat date since we just took live LineString's dates
      'geometry.date': newInformation.date,
    },
  });
};

const updateEvent = (oldEvent, newInformation) => {
  if (oldEvent.geometry.type === 'Point') {
    updatePoint(oldEvent, newInformation);
  } else if (oldEvent.geometry.type === 'LineString') {
    updateLineString(oldEvent, newInformation);
  }
};

module.exports = updateEvent;
