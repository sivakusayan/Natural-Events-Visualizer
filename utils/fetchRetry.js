/**
 * @fileoverview A modified form of the fetch function so that we 
 * can, upon an error, retry for a specified amount of times.
 */
const fetch = require('node-fetch');

/**
 * A modified version of fetch. 
 * 
 * @param url
 *  The url to fetch data from
 * @param tryCount 
 *  The number of times to retry before throwing an error
 * @param delay
 *  The number of milliseconds to wait between tries
 */
const fetchRetry = async (url, tryCount, delay) => {
  console.log(tryCount);
  try {
    const promise = await fetch(url);
    return promise;
  } catch (err) {
    if (tryCount === 0) throw err;
    let nextTry;
    setTimeout(() => {
      nextTry = fetchRetry(url, tryCount - 1, delay);
    }, delay);
    return nextTry;
  }
};

fetchRetry('https://eoet.sci.gsfc.nasa.gov/api/v2.1/events', 1000, 5);
