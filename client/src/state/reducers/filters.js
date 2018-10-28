/**
 * @fileoverview Reducer for the state's filters field.
 */

import {
  SET_LATITUDE, SET_LONGITUDE, SET_RADIUS, SET_CATEGORIES, SET_START_DATE, SET_END_DATE,
} from '../actionTypes/filtersActionTypes';

// If any properties are not undefined, build new query accordingly
const filtersDefaultState = {
  location: {
    latitude: undefined,
    longitude: undefined,
  },
  radius: undefined,
  categories: undefined,
  startDate: undefined,
  endDate: undefined,
};

export default (state = filtersDefaultState, action) => {
  switch (action.type) {
    case SET_LATITUDE:
      return {
        ...state,
        location: {
          ...state.location,
          latitude: action.latitude,
        },
      };
    case SET_LONGITUDE:
      return {
        ...state,
        location: {
          ...state.location,
          longitude: action.longitude,
        },
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
