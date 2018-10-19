/**
 * @fileoverview Provides support for local-reverse-geocoder. As the library
 * only provides accurate reverse geooding for locations that are near human settlements,
 * this function aids accuracy by checking if a location is near the oceans or the poles.
 * 
 * We use the bounding boxes created by Natural Earth Data to create the boundaries of our oceans. 
 * The data can be inspected at geojson.xyz under the dataset "geography marine polys".
 */
const inside = require('@turf/boolean-point-in-polygon');

const oceans = require('../../../geoOcean/oceans.json').features;

