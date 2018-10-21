/**
 * @fileoverview Schema for the converted Event object. Follows GeoJSON specifications.
 */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const EventLocation = new Schema({
  city: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  waters: {
    type: String,
    required: true,
  }
}, { _id : false })

const EventGeometry = new Schema({
  date: {
    type: Schema.Types.Mixed,
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
  location: {
    type: Schema.Types.Mixed,
    required: true,
  }
}, { _id : false });

const EventSource = new Schema({
  id: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
}, { _id : false });

const EventProperties = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  sources: [EventSource],
  categories: [Number],
}, { _id : false });

const EventSchema = new Schema({
  _id: {
    type: String,
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
