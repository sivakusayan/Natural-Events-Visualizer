/**
 * @fileoverview Makes GeoJSON coordinates more performant by getting rid of
 * unnecessary precision.
 */

const PRECISION = require('../constants/PRECISION');

/**
 * Takes a number and returns a number that is
 * rounded to the specified precision.
 * 
 * @param {Number} number
 * The number to round
 * 
 * @returns
 * The rounded number
 */
const roundNumber = (number, precision) => parseFloat(number.toFixed(precision));

/**
 * Takes a point and returns a point that has coordinates
 * rounded to the specified precision.
 * 
 * @param {Number[]} points 
 * A point in two dimensional space.
 * @param {Number} precision
 * The number of decimal points to round to.
 * 
 * @returns
 * The rounded point
 */
const roundPoint = (point, precision = PRECISION) => [
  roundNumber(point[0], precision), roundNumber(point[1], precision),
];

module.exports = roundPoint;
