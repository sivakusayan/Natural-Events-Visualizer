/**
 * We will round the coordinates of our events to 4 decimal places. According to the 
 * Wikipedia page at: https://en.wikipedia.org/wiki/Decimal_degrees and the discussion 
 * at https://gis.stackexchange.com/questions/8650/measuring-accuracy-of-latitude-and-longitude,
 * this should be sufficient to distinguish two different parcels of land, which is more 
 * than enough for our needs.
 */

module.exports = 4;
