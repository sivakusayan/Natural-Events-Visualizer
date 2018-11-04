/**
 * @fileoverview Schema for the converted Event object. Follows GeoJSON specifications.
 */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const EventLocation = new Schema({
  // The first three properties are used if event is on land.
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  country: {
    type: String,
  },
  // Else last property is used if event is on water
  waters: {
    type: String,
  },
}, { _id: false });

const EventGeometry = new Schema({
  date: {
    type: [Number],
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ['Point', 'LineString', 'Polygon'],
  },
  coordinates: {
    required: true,
    type: [],
  },
  location: {
    type: [EventLocation],
    required: true,
  },
}, { _id: false });

const EventSource = new Schema({
  id: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
}, { _id: false });

const EventProperties = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  id: Number,
  sources: [EventSource],
  category: Number,
}, { _id: false });

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

// Define index for geospatial querying
EventSchema.index({ geometry: '2dsphere' });
// Define index for quick sorting
EventSchema.index({ 'geometry.date': -1 });

module.exports = mongoose.model('event', EventSchema);
