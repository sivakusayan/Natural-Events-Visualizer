import {
  TOGGLE_LOCATION,
  TOGGLE_CATEGORIES,
  TOGGLE_START_DATE,
  TOGGLE_END_DATE,
} from '../actionTypes/filtersAreActiveActionTypes';

export const toggleLocation = () => ({
  type: TOGGLE_LOCATION,
});

export const toggleCategories = () => ({
  type: TOGGLE_CATEGORIES,
});

export const toggleStartDate = () => ({
  type: TOGGLE_START_DATE,
});

export const toggleEndDate = () => ({
  type: TOGGLE_END_DATE,
});
