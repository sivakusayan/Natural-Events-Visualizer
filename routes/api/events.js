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
 * @param title Filters for events that contain this parameter in their title.
 * 
 * @param long The longitude of the search center          || ~~ If searching by location,
 * @param lat The latitude of the search center        || ~~ both lat and long need to be
 * @param radius The radius of the search. Defaults      || ~~ defined.
 *               to 100 kilometers.            
 * 
 * @param categoryID Filters for events of this category
 * 
 * @param startDate Filters for events weakly after this timestamp in milliseconds.
 * @param endDate Filters for events strictly before this timestamp in milliseconds.
 */
router.get('/', (req, res) => {
  const query = {};

  // Build query object
  if (req.query.title) query['properties.title'] = new RegExp(req.query.title, 'i');
  if (req.query.long && req.query.lat) {
    query.geometry = {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [req.query.long, req.query.lat],
        },
        $maxDistance: req.query.radius || 1000000,
      },
    };
  }
  if (req.query.categoryID) query['properties.categories'] = req.query.categoryID;
  if (req.query.startDate) {
    query['geometry.date'] = { $gte: req.query.startDate };
  }
  if (req.query.endDate) {
    query['geometry.date[geometry.date.length - 1]'] = { $lt: req.query.endDate };
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

module.exports = router;
