import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { loadCategories } from './constants/categories';
import fetchRetry from '../../utils/fetchRetry';

import configureStore from './state/store/configureStore';
// import EventMap from './components/Map/EventMap';
import SearchContainer from './containers/Search/indexContainer';
import './styles/styles.scss';

const store = configureStore();

class App extends React.Component {
  state = {
    events: [],
    selectedEvent: null,
    isLoading: true,
    error: false,
  }

  setEvents = (events) => {
    this.setState(prevState => ({
      ...prevState,
      events,
    }));
  }

  componentDidMount = () => {
    Promise.all([fetchRetry('http://localhost:3000/api/events'), loadCategories])
      .then((res) => {
        this.setState(prevState => ({
          ...prevState,
          events: res[0],
          isLoading: false,
        }));
      });
  }

  render() {
    const { events, isLoading } = this.state;
    return (
      <Provider store={store}>
        <div>
          {!isLoading
            && (
              <SearchContainer
                setEvents={this.setEvents}
                events={events}
              />
            )
          }
          {isLoading && <h1>Loading! Please hold...</h1>}
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
