import { createStore, combineReducers } from 'redux';

import eventsReducer from '../reducers/events';
import loadingReducer from '../reducers/loading';
import errorReducer from '../reducers/error';

export default () => {
  const store = createStore(
    combineReducers({
      events: eventsReducer,
      isLoading: loadingReducer,
      error: errorReducer,
    }),
  );

  return store;
};
