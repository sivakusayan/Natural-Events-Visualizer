/**
 * @fileoverview Schema for the converted Event object. Follows GeoJSON specifications.
 */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const EventLocation = new Schema({
  // The first three properties are used if event is on significant land.
  city: {
    type: String,
  },
  province: {
    type: String,
  },
  country: {
    type: String,
  },
  // Else these two properties if event is on water/minor island.
  waters: {
    type: String,
  },
  onIsland: {
    type: Boolean,
  }
}, { _id: false });

const EventGeometry = new Schema({
  date: {
    type: Schema.Types.Mixed, // Either Number or Number[]
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
    type: Schema.Types.Mixed, // Either EventLocation or EventLocation[]
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
  sources: [EventSource],
  categories: [Number],
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

EventSchema.index({ geometry: '2dsphere' });

module.exports = mongoose.model('event', EventSchema);
