/**
 * @fileoverview Defines interactions with the event database. 
 * Routes are defined within the context of '/api/events'
 */

const express = require('express');
const Event = require('../../models/Event');

const router = express.Router();

/**
 * Get every event sorted in reverse chronological order. 
 * @name GET api/items
 */
router.get('/', (req, res) => {
  Event.find()
    .then(events => res.json(events));
});

/**
 * Add new events into the database. 
 * @name POST api/items
 */
router.post('/', (req, res) => {
  const newEvent = new Event({
    _id: req.body._id,
    type: 'Feature',
    geometries: req.body.geometries,
    properties: req.body.properties,
  });

  newEvent.save()
    .then(event => res.json(event))
    .catch(err => res.json(err));
});

module.exports = router;
