import { START_LOADING, DONE_LOADING } from '../actionTypes/loadingActionTypes';

export const startLoading = () => ({
  type: START_LOADING,
});

export const doneLoading = () => ({
  type: DONE_LOADING,
});
