import { createStore, combineReducers } from 'redux';

import eventsReducer from '../reducers/events';
import filtersReducer from '../reducers/filters';
import filtersAreActiveReducer from '../reducers/filtersAreActive';
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
      // The filters that will be added to search queries.
      // Fow now, the filters are only applied to the
      // search results, and not the actual map.
      filters: filtersReducer,
      // Enables or disables the filters. If true,
      // the defined filters in the state will be used
      // to perform search queries. If false, they will
      // not be applied (although their data is still saved).
      filtersAreActive: filtersAreActiveReducer,
      // The loading state of the application. Set to true 
      // while data is hydrating and map is generating.
      isLoading: loadingReducer,
      // Error status of hydration.
      error: errorReducer,
      // The event that is currently selected by the user.
      // The map will fly the user to this event, as well 
      // as render a popup at the events location. The event
      // will be highlighted in search results if it is there.
      selectedEvent: selectedEventReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
};
