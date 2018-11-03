import { createStore, combineReducers } from 'redux';

import eventsReducer from '../reducers/events';
import loadingReducer from '../reducers/loading';
import errorReducer from '../reducers/error';
import selectedEventReducer from '../reducers/selectedEvent';

export default () => {
  const store = createStore(
    combineReducers({
      // The events that will be rendered on the map.
      // Will typically be all the events in the database.
      // May change as data gets larger.
      events: eventsReducer,
      // The loading state of the application. Set to true 
      // while data is hydrating.
      isLoading: loadingReducer,
      // Error status of hydration.
      error: errorReducer,
      // The event that is currently selected by the user.
      // The map will zoom on this event, and will be
      // highlighted if it is in the search results.
      selectedEvent: selectedEventReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
