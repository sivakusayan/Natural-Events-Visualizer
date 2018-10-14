/**
 * @fileoverview Defines interactions with the event database. 
 * Routes are defined within the context of '/api/events'
 */

const express = require('express');
const Event = require('../../models/Event');

const router = express.Router();

/**
 * Get every event sorted in reverse chronological order. The user can narrow down their 
 * search using the filters listed below.
 * @name GET api/items
 * 
 * @param title Filters for events that contain <code>name</code> in their title.
 * 
 * @param lat The latitude of the search center          || ~~ If searching by location,
 * @param long The longitude of the search center        || ~~ both lat and long need to be
 * @param radius The radius of the search. Defaults      || ~~ defined.
 *               to 100 miles.                
 * 
 * @param categoryID Filters for events of this category
 * 
 * @param startDate Filters for events after this ISO 8601 formatted date.
 * @param endDate Filters for events before this ISO 8601 formatted date.
 */
router.get('/', (req, res) => {
  const query = {};

  // Build query object
  if (req.query.title) query['properties.title'] = new RegExp(req.query.title, 'i');
  if (req.query.lat && req.query.long) {
    query.geometries = {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [req.query.long, req.query.lat],
        },
        $maxDistance: 1000000,
      }
    };
  }
  if (req.query.categoryID) query['properties.categories'] = req.query.categoryID;
  if (req.query.startDate) {
    query['geometries.date'] = { $gte: req.query.startDate };
  }
  if (req.query.endDate) {
    query['geometries.date'] = { $lte: req.query.endDate };
  }

  Event.find(query)
    .then(events => res.json(events));
});
/**
 * Get an event by its id.
 * @name GET api/items/{id}
 */
router.get('/:id', (req, res) => {
  Event.findById(req.params.id)
    .then((event) => {
      if (!event) {
        res.status(404).send({ err: 'Event could not be found' });
      } else {
        res.json(event);
      }
    });
});

/**
 * Add new events into the database. 
 * @name POST api/items
 */
router.post('/', (req, res) => {
  const newEvent = new Event({
    _id: req.body._id,
    type: 'Feature',
    geometries: req.body.geometries.map(geometry => ({
      type: geometry.type,
      coordinates: geometry.coordinates,
      date: geometry.date,
    })),
    properties: req.body.properties,
  });

  newEvent.save()
    .then(event => res.json(event))
    .catch(err => res.json(err));
});

module.exports = router;
