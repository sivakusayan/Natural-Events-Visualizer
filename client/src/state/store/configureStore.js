import { createStore, combineReducers } from 'redux';

import eventsReducer from '../reducers/events';
import loadingReducer from '../reducers/loading';

export default () => {
  const store = createStore(
    combineReducers({
      events: eventsReducer,
      isLoading: loadingReducer,
    }),
  );

  return store;
};
