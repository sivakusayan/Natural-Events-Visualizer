/**
 * @fileoverview Provides support for local-reverse-geocoder. As the library
 * only provides accurate reverse geooding for locations that are near human settlements,
 * this function aids accuracy by checking if a location is near the oceans or the poles.
 * 
 * We use the bounding boxes defined by the NOAA at
 * https://www.nodc.noaa.gov/woce/woce_v3/wocedata_1/woce-uot/summary/bound.htm
 * to create the boundaries of our oceans. The polygons representing each ocean are slightly 
 * modified to have holes, in order to not overshadow any populous islands that 
 * local-reverse-geocoder can check for. 
 * 
 * The bounding box for Antarctica is taken from https://www.naturalearthdata.com/
 */
const inside = require('point-in-polygon');
const polygon = [
  [-76, -80],
  [-84,-150],
  [-84, 147],
  [-70, 150]
];

console.log(inside([-80, 0], polygon));