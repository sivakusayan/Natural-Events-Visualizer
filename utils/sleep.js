/**
 * @fileoverview This function acts as workaround for sending queries too fast for the 
 * Google API. I'm not made of money, you know.
 */

/**
 * Function that resolves a promise after the specified
 * amount of seconds. If awaited, can act as a delay.
 * 
 * @param {Number} delay 
 *  The length of time to delay for
 */
const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

module.exports = sleep;
