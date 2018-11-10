import {
  SET_LATITUDE,
  SET_LONGITUDE,
  SET_RADIUS,
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  SET_START_DATE,
  SET_END_DATE,
} from '../actionTypes/filterActionTypes';

export const setLatitude = latitude => ({
  type: SET_LATITUDE,
  latitude,
});

export const setLongitude = longitude => ({
  type: SET_LONGITUDE,
  longitude,
});

export const setRadius = radius => ({
  type: SET_RADIUS,
  radius,
});

export const addCategory = categoryID => ({
  type: ADD_CATEGORY,
  categoryID,
});

export const removeCategory = categoryID => ({
  type: REMOVE_CATEGORY,
  categoryID,
});

export const setStartDate = startDate => ({
  type: SET_START_DATE,
  startDate,
});

export const setEndDate = endDate => ({
  type: SET_END_DATE,
  endDate,
});
