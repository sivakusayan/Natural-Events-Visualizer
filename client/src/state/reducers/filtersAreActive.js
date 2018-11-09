/**
 * Reducer for the state's filtersAreActive field.
 */

import {
  TOGGLE_LOCATION,
  TOGGLE_CATEGORIES,
  TOGGLE_START_DATE,
  TOGGLE_END_DATE,
} from '../actionTypes/filtersAreActiveActionTypes';

const filtersAreActiveDefaultState = {
  location: false,
  categories: false,
  startDate: false,
  endDate: false,
};

export default (state = filtersAreActiveDefaultState, action) => {
  switch (action.type) {
    case TOGGLE_LOCATION:
      return {
        ...state,
        location: !state.location,
      };
    case TOGGLE_CATEGORIES:
      return {
        ...state,
        categories: !state.categories,
      };
    case TOGGLE_START_DATE:
      return {
        ...state,
        startDate: !state.startDate,
      };
    case TOGGLE_END_DATE:
      return {
        ...state,
        endDate: !state.endDate,
      };
    default:
      return state;
  }
};
