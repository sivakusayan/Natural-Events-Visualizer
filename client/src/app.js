import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './state/store/configureStore';
// import EventMap from './components/Map/EventMap';
import SearchContainer from './containers/Search/indexContainer';
import './styles/styles.scss';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <SearchContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
