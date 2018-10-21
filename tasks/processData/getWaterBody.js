/**
 * @fileoverview Provides support for local-reverse-geocoder. As the library
 * only provides accurate reverse geooding for locations that are on land,
 * this function aids accuracy by checking if a location is on water.
 * 
 * We use the bounding boxes created by Natural Earth Data to create the boundaries 
 * of our water bodies. The data can be inspected at geojson.xyz under the 
 * dataset "geography marine polys".
 */
const inside = require('@turf/boolean-point-in-polygon').default;

const waterBodies = require('../../geoWater/oceans.json').features;

/**
 * Takes in a point, and returns the body of water the point is in.
 * 
 * @param {[Number]} point 
 * Point to check. Point is of the form [longitude, latitude].
 * 
 * @returns
 * The body of water the point is in, or null if no appropriate location
 * is found.
 */

const getWaterBody = (point) => {
  // Loop through water bodies in dataset
  for (let i = 0; i < waterBodies.length; i += 1) {
    // If a match is found, return the name of the body
    if (inside(point, waterBodies[i].geometry)) {
      // Some water bodies in the dataset don't have names, such as a nation's 
      // internal waters. Use name in note as backup.
      const name = waterBodies[i].properties.name || waterBodies[i].properties.note;
      return name;
    }
  }
  // Else return null
  return null;
};

module.exports = getWaterBody;
