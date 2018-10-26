/**
 * @fileoverview Reducer for the state's filters field.
 */

import {
  SET_LOCATION, SET_RADIUS, SET_CATEGORIES, SET_START_DATE, SET_END_DATE,
} from '../actionTypes/filtersActionTypes';

// If any properties are not undefined, build new query accordingly
const filtersDefaultState = {
  location: undefined,
  radius: undefined,
  categories: undefined,
  startDate: undefined,
  endDate: undefined,
};

export default (state = filtersDefaultState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.location,
      };
    case SET_RADIUS:
      return {
        ...state,
        radius: action.radius,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      }
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.startDate,
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};
