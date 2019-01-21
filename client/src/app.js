import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';

import { LOCAL_API_URL } from './constants/misc/URL_STRINGS';
import fetchRetry from '../../utils/fetchRetry';

import { setEvents } from './state/actions/events';
import { doneLoadingData } from './state/actions/loading';
import { setError, removeError } from './state/actions/error';
import configureStore from './state/store/configureStore';

import EventVisualizer from './components/EventVisualizer';
import LoadingScreenContainer from './containers/Loading/LoadingScreenContainer';
import './styles/main.scss';

const store = configureStore();

class App extends React.Component {
  hydrateData = () => {
    const { initEvents, dataLoadEnd } = this.props;
    fetchRetry(LOCAL_API_URL)
      .then((data) => {
        initEvents(data);
        dataLoadEnd();
      });
  }

  componentDidMount = () => {
    this.hydrateData();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <>
            {isLoading && <LoadingScreenContainer />}
            <EventVisualizer />
          </>
        </BrowserRouter>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading.dataIsLoading || state.isLoading.mapIsLoading,
});

const mapDispatchToProps = dispatch => ({
  initEvents: events => dispatch(setEvents(events)),
  dataLoadEnd: () => dispatch(doneLoadingData()),
});

App.propTypes = {
  /**
   * Sets the events that the application will use.
   */
  initEvents: PropTypes.func.isRequired,
  /**
   * True while data is hydrating and the map is rendering, false otherwise.
   */
  isLoading: PropTypes.bool.isRequired,
  /**
   * Finishes one of the requirements for the loading screen to
   * stop. Once the map is loaded as well, the application
   * will be shown.
   */
  dataLoadEnd: PropTypes.func.isRequired,
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

// Pass store to have loading check happen in highest level component
// possible.
ReactDOM.render(<AppContainer store={store} />, document.getElementById('app'));
