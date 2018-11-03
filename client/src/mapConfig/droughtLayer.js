/**
 * @fileoverview Configuration for the map layer concerned
 * with drought events.
 */

export const getDroughtGeoJSON = events => ({
  type: 'FeatureCollection',
  features: events.filter(event => event.properties.categories.includes(12)),
});

export const droughtCircleLayout = { visibility: 'visible' };
export const droughtCirclePaint = { 'circle-color': 'red' };
