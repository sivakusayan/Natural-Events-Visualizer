/**
 * @fileoverview Configuration for the map layer concerned
 * with drought events.
 */

export const getDroughtGeoJSON = events => ({
  type: 'FeatureCollection',
  features: events.filter(event => event.properties.categories.includes(6)),
});

export const droughtSymbolLayout = {
  'text-field': '{place}',
  'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
  'text-offset': [0, 0.6],
  'text-anchor': 'top',
};
export const droughtSymbolPaint = {
  'text-color': 'blue',
};
export const droughtCircleLayout = { visibility: 'visible' };
export const droughtCirclePaint = { 'circle-color': 'blue' };
