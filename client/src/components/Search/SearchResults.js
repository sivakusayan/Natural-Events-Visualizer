import React from 'react';

import SearchResult from './SearchResult';

export default class SearchResults extends React.Component {
  state = {
    events: [
      {
        _id: 'EONET_2923',
        properties: {
          title: 'Volcano Shit',
          categories: 2,
        },
        geometry: {
          location: 'AMERICA',
        },
      },
    ],
  }

  render() {
    return (
      <div>
        {this.state.events.map(event => <SearchResult key={event._id} event={event} />)}
      </div>
    );
  }
}
