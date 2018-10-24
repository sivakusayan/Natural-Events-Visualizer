/**
 * @fileoverview Controls the loading tag for the application.
 */

/**
 * Create an action to set the loading flag to true.
 */
export const startLoading = () => ({
  type: 'START_LOADING',
});

/**
 * Create an action to set the loading flag to false.
 */
export const doneLoading = () => ({
  type: 'DONE_LOADING',
});
