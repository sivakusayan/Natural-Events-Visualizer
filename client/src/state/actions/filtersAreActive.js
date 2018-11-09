/**
 * Generates actions to enable and disable the filters.
 */

import {
  TOGGLE_LOCATION,
  TOGGLE_CATEGORIES,
  TOGGLE_START_DATE,
  TOGGLE_END_DATE,
} from '../actionTypes/filtersAreActiveActionTypes';

/**
 * Toggles between whether the location filter
 * should be enabled or disabled.
 */
export const toggleLocation = () => ({
  type: TOGGLE_LOCATION,
});

/**
 * Toggles between whether the categories filter
 * should be enabled or disabled.
 */
export const toggleCategories = () => ({
  type: TOGGLE_CATEGORIES,
});

/**
 * Toggles between whether the start date filter
 * should be enabled or disabled.
 */
export const toggleStartDate = () => ({
  type: TOGGLE_START_DATE,
});

/**
 * Toggles between whether the end date filter
 * should be enabled or disabled.
 */
export const toggleEndDate = () => ({
  type: TOGGLE_END_DATE,
});
