/**
 * @fileoverview The reducer for the state's filters field. 
 */
import moment from 'moment';

import {
  SET_LATITUDE,
  SET_LONGITUDE,
  SET_RADIUS,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  SET_START_DATE,
  SET_END_DATE,
} from '../actionTypes/filterActionTypes';

const filtersReducerDefaultState = {
  // Filter for events within the circle specified
  // by these values
  location: {
    latitude: '',
    longitude: '',
    radius: 1000000,
  },
  // Filter for events of the following categories
  categories: Object.keys(CATEGORIES),
  // Filter for events after this date
  startDate: 1325463472000,
  // Filter for events before this date
  endDate: moment().valueOf(),
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SET_LATITUDE:
      return {
        ...state,
        location: {
          ...state,
          latitude: action.latitude,
        },
      };
    case SET_LONGITUDE:
      return {
        ...state,
        location: {
          ...state,
          longitude: action.longitude,
        },
      };
    case SET_RADIUS:
      return {
        ...state,
        location: {
          ...state,
          radius: action.radius,
        },
      };
    case ADD_CATEGORY:
      return {
        ...state,
        categories: state.categories.concat(action.categoryID),
      };
    case REMOVE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(id => id !== action.categoryID),
      };
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
