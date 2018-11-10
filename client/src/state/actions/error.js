import { SET_ERROR, REMOVE_ERROR } from '../actionTypes/errorActionTypes';

export const setError = () => ({
  type: SET_ERROR,
});

export const removeError = () => ({
  type: REMOVE_ERROR,
});
