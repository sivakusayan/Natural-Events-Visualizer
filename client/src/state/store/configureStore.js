import { createStore, combineReducers } from 'redux';

import eventsReducer from '../reducers/events';
import filtersReducer from '../reducers/filters';
import loadingReducer from '../reducers/loading';
import errorReducer from '../reducers/error';

export default () => {
  const store = createStore(
    combineReducers({
      events: eventsReducer,
      filters: filtersReducer,
      isLoading: loadingReducer,
      error: errorReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
