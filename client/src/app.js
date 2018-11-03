import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';

import { EVENTS_URL } from '../../constants/URL_STRINGS';
import fetchRetry from '../../utils/fetchRetry';

import Event from './propTypes/Event';

import { setEvents } from './state/actions/events';
import { startLoading, doneLoading } from './state/actions/loading';
import { setError, removeError } from './state/actions/error';
import configureStore from './state/store/configureStore';

// import EventMap from './components/Map/EventMap';
import SearchContainer from './containers/Search/indexContainer';
import './styles/styles.scss';

const store = configureStore();

class App extends React.Component {
  /**
   * Initializes the data of the application.
   * Events and event categories will be hydrated in 
   * this step.
   */
  hydrateData = () => {
    const { initEvents, loadStart, loadEnd } = this.props;
    loadStart();
    fetchRetry(EVENTS_URL)
      .then((data) => {
        // Update state with events
        initEvents(data);
        // Update state with categories
        loadEnd();
      });
  }

  componentDidMount = () => {
    this.hydrateData();
  }

  render() {
    const { events, isLoading } = this.props;
    return (
      <Provider store={store}>
        <div>
          {!isLoading && <SearchContainer events={events} />}
          {isLoading && <h1>Loading! Please hold...</h1>}
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  events: state.loading,
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  initEvents: events => dispatch(setEvents(events)),
  loadStart: () => dispatch(startLoading()),
  loadEnd: () => dispatch(doneLoading()),
});

App.propTypes = {
  /**
   * The total list of events from the database. Used to
   * load the events onto the map and initialize search
   * results.
   */
  events: PropTypes.arrayOf(Event).isRequired,
  /**
   * Sets the events that the application will use.
   */
  initEvents: PropTypes.func.isRequired,
  /**
   * True if the application is hydrating data, false otherwise.
   */
  isLoading: PropTypes.bool.isRequired,
  /**
   * Sets the application's loading tag to true.
   */
  loadStart: PropTypes.func.isRequired,
  /**
   * Sets the application's loading tag to be false.
   */
  loadEnd: PropTypes.func.isRequired,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

// Pass store to bypass unnecessary 'middle' component to determine what
// component to load.
ReactDOM.render(<AppContainer store={store} />, document.getElementById('app'));
