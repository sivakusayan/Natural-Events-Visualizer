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
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
