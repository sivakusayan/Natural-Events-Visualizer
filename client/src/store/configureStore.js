import { createStore, combineReducers } from 'redux';

import eventsReducer from '../reducers/events';

export default () => {
  const store = createStore(
    combineReducers({
      events: eventsReducer,
    }),
  );

  return store;
};
