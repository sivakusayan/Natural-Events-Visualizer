/**
 * @fileoverview Holds the value that determines number of decimal places that we
 * round coordinates to. We round the event coordinates to exchange unnecessary
 * precision for performance.
 * 
 * According to the discussion at https://gis.stackexchange.com/questions/8650/measuring-accuracy-of-latitude-and-longitude
 * and https://en.wikipedia.org/wiki/Decimal_degrees, coordinates that are rounded to 
 * 4 decimal places are accurate enough to distinguish two parcels of land. This is
 * more than enough for our needs.
 */

module.exports = 4;
