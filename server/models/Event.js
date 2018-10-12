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
  coordinates: {
    type: [Number],
    required: true,
    minItems: 2,
    maxItems: 2,
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

const EventCategories = new Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
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
  categories: [EventCategories],
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
  geometry: EventGeometry,
  properties: EventProperties,
});

module.exports = mongoose.model('event', EventSchema);
