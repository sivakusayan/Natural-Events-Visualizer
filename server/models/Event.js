/**
 * @fileoverview Schema for the converted Event object. Follows GeoJSON specifications.
 */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const EventGeometry = new Schema({
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
    default: 'Feature',
  },
  index: {
    type: String,
    required: true,
    default: '2dsphere',
  },
  coordinates: {
    required: true,
    type: [],
  },
});

const EventSource = new Schema({
  id: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const EventProperties = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  sources: [EventSource],
  categories: [Number],
});

const EventSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
    match: /Feature/,
  },
  geometries: [EventGeometry],
  properties: EventProperties,
});

module.exports = mongoose.model('event', EventSchema);
