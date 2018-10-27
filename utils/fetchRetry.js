/**
 * @fileoverview A modified form of the fetch function so that we 
 * can, upon an error, retry for a specified amount of times.
 */
const fetch = require('node-fetch');

/**
 * A modified version of fetch. 
 * 
 * @param {String} url
 *  The url to fetch data from
 * @param {Number} tryCount 
 *  The number of times to retry before throwing an error
 * @param {Number} delay
 *  The number of milliseconds to wait between tries
 * @param {Function} assert
 *  Assert something about the response. If assertions are false,
 *  the fetch function is retried. Use to circumvent fetch only
 *  throwing 'network errors'
 */
const fetchRetry = async (url, assert, tryCount = 5, delay = 10000) => {
  try {
    // Try fetching data
    const promise = await fetch(url);
    // Assert statement about fetched data
    if (!assert(promise)) throw Error('Response does not satisfy assertions.');
    return promise;
  } catch (err) {
    // Throw error if all tries are used
    if (tryCount === 0) throw err;
    let nextTry;
    // Otherwise, wait and try again
    setTimeout(() => {
      nextTry = fetchRetry(url, assert, tryCount - 1, delay);
    }, delay);
    return nextTry;
  }
};
