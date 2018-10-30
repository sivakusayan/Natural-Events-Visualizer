/**
 * @fileoverview A modified form of the fetch function so that we 
 * can, upon an error, retry for a specified amount of times. The response
 * is also automatically converted to JSON.
 */
const fetch = require('cross-fetch');

/**
 * Function that resolves a promise after the specified
 * amount of seconds. If awaited, can act as a delay.
 * 
 * @param {Number} delay 
 *  The length of time to delay for
 */
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

/**
 * A modified version of fetch. Response is automatically
 * converted to JSON.
 * 
 * @param {String} url
 *  The url to fetch data from
 * @param {Function} assert
 *  Assert something about the response. If assertions are false,
 *  the fetch function is retried. Use to circumvent fetch only
 *  throwing 'network errors'
 * @param {Number} tryCount 
 *  The number of times to retry before throwing an error
 * @param {Number} delay
 *  The number of milliseconds to wait between tries
 * 
 * @return {Promise}
 *  The response from the url.
 */
const fetchRetry = async (url, assert = () => true, tryCount = 3, delay = 1000) => {
  try {
    // Try fetching data
    const promise = await fetch(url).then(response => response.json());
    // Assert statement about fetched data
    if (!assert(promise)) {
      throw Error('Response does not satisfy assertions.');
    }
    return promise;
  } catch (err) {
    // Throw error if all tries are used
    if (tryCount === 0) throw err;
    // Wait before trying again
    await sleep(delay);
    return fetchRetry(url, assert, tryCount - 1, delay);
  }
};

module.exports = fetchRetry;
