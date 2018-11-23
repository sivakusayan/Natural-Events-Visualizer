import {
  START_LOADING_DATA,
  DONE_LOADING_DATA,
  START_LOADING_MAP,
  DONE_LOADING_MAP,
} from '../actionTypes/loadingActionTypes';

const loadingDefaultState = {
  dataIsLoading: true,
  mapIsLoading: true,
};

export default (state = loadingDefaultState, action) => {
  switch (action.type) {
    case START_LOADING_DATA:
      return ({
        ...state,
        dataIsLoading: true,
      });
    case DONE_LOADING_DATA:
      return ({
        ...state,
        dataIsLoading: false,
      });
    case START_LOADING_MAP:
      return ({
        ...state,
        mapIsLoading: true,
      });
    case DONE_LOADING_MAP:
      return ({
        ...state,
        mapIsLoading: false,
      });
    default:
      return state;
  }
};
