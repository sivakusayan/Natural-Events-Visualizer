/**
 * @fileoverview Handles the error tag for the application.
 */

import { SET_ERROR, REMOVE_ERROR } from '../actionTypes/errorActionTypes';

/**
 * Creates an action to set the error tag to true.
 */
export const setError = () => ({
  type: SET_ERROR,
});

/**
 * Creates an action to set the error tag to false.
 */
export const removeError = () => ({
  type: REMOVE_ERROR,
});
