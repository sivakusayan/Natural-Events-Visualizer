/**
 * Time to wait in between google reverse geocode requests. This number is 
 * defined to avoid sending too many requests in a single time frame,
 * bypassing the OVER_QUERY_LIMIT error.
 */

module.exports = 1000;
