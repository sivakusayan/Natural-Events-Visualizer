/**
 * @fileoverview Generates actions to change the values used
 * in the filters.
 */

import {
  SET_LATITUDE,
  SET_LONGITUDE,
  SET_RADIUS,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  SET_START_DATE,
  SET_END_DATE,
} from '../actionTypes/filterActionTypes';

/**
 * An action generator to set the latitude to 
 * use in the location filter.
 * 
 * @param {Number} latitude
 *  The latitude to set
 */
export const setLatitude = latitude => ({
  type: SET_LATITUDE,
  latitude,
});

/**
 * An action generator to set the longitude to 
 * use in the location filter.
 * 
 * @param {Number} longitude
 *  The longitude to set
 */
export const setLongitude = longitude => ({
  type: SET_LONGITUDE,
  longitude,
});

/**
 * An action generator to set the radius to 
 * use in the location filter.
 * 
 * @param {Number} radius
 *  The radius to set
 */
export const setRadius = radius => ({
  type: SET_RADIUS,
  radius,
});

/**
 * An action generator to add the desired
 * category to the categories filter.
 * 
 * @param {Number} categoryID
 *  The ID of the desired category
 */
export const addCategory = categoryID => ({
  type: ADD_CATEGORY,
  categoryID,
});

/**
 * An action generator to remove the desired
 * category from the categories filter.
 * 
 * @param {Number} categoryID
 *  The ID of the desired category
 */
export const removeCategory = categoryID => ({
  type: REMOVE_CATEGORY,
  categoryID,
});

/**
 * An action generator to set the start date
 * to use in the filter.
 * 
 * @param {Number} startDate
 *  The desired start date in millisecond time stamp form.
 */
export const setStartDate = startDate => ({
  type: SET_START_DATE,
  startDate,
});

/**
 * An action generator to set the end date
 * to use in the filter.
 * 
 * @param {Number} endDate
 *  The desired start date in millisecond time stamp form.
 */
export const setEndDate = endDate => ({
  type: SET_END_DATE,
  endDate,
});
