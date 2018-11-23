import {
  START_LOADING_DATA,
  DONE_LOADING_DATA,
  START_LOADING_MAP,
  DONE_LOADING_MAP,
} from '../actionTypes/loadingActionTypes';

export const startLoadingData = () => ({
  type: START_LOADING_DATA,
});

export const doneLoadingData = () => ({
  type: DONE_LOADING_DATA,
});

export const startLoadingMap = () => ({
  type: START_LOADING_MAP,
});

export const doneLoadingMap = () => ({
  type: DONE_LOADING_MAP,
});
