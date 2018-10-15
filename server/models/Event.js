/**
 * @fileoverview Schema for the converted Event object. Follows GeoJSON specifications.
 */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const EventGeometry = new Schema({
  date: {
    type: [Date],
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['Point', 'LineString', 'Polygon']
  },
  coordinates: {
    required: true,
    type: [],
  },
});

const EventSource = new Schema({
  _id: {
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
  geometry: EventGeometry,
  properties: EventProperties,
});

EventSchema.index({ geometry: '2dsphere' });

module.exports = mongoose.model('event', EventSchema);
