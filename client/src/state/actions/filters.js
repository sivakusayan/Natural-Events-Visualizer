/**
 * @fileoverview Generates the action to add filters to the search query.
 */

import {
  SET_LATITUDE, SET_LONGITUDE, SET_RADIUS, SET_CATEGORIES, SET_START_DATE, SET_END_DATE,
} from '../actionTypes/filtersActionTypes';

/**
 * Specifies the longitude for the location filter.
 * @param {Number[]} longitude
 *  The desired longitude
 */
export const setLongitude = longitude => ({
  type: SET_LONGITUDE,
  longitude,
});

/**
 * Specifies the latitude for the location filter
 * @param {Number[]} latitude
 *  The desired latitude
 */
export const setLatitude = latitude => ({
  type: SET_LATITUDE,
  latitude,
});

/**
 * Specifies the radius for the location filter
 * @param {Number} radius
 *  The radius to search within
 */
export const setRadius = radius => ({
  type: SET_RADIUS,
  radius,
});

/**
 * Adds the categories filter to the search query
 * @param {Number[]} categories
 *  The caegories to filter for
 */
export const setCategories = categories => ({
  type: SET_CATEGORIES,
  categories,
});

/**
 * Adds the startDate filter to the search query
 * @param {Number} startDate
 *  The startDate to filter for
 */
export const setStartDate = startDate => ({
  type: SET_START_DATE,
  startDate,
});

/**
 * Adds the endDate filter to the search query
 * @param {Number} endDate
 *  The endDate to filter for
 */
export const setEndDate = endDate => ({
  type: SET_END_DATE,
  endDate,
})
