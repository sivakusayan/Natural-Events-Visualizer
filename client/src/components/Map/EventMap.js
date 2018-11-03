import React from 'react';
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl';

import KEY from '../../../../constants/MAPBOX_API_KEY';
import STYLE from '../../../../constants/MAPBOX_STYLE';

import DroughtLayerContainer from '../../containers/Map/DroughtLayerContainer';
import DustAndHazeLayerContainer from '../../containers/Map/DustAndHazeLayerContainer';

const Map = ReactMapboxGl({
  accessToken: KEY,
  minZoom: 2,
  maxZoom: 12,
});

class EventMap extends React.Component {
  state = {
    selectedEvent: null,
  }

  render() {
    return (
      <Map
        style={STYLE}
        containerStyle={{
          height: '100vh',
          width: '100vw',
        }}
        zoom={[2]}
      >
        <DroughtLayerContainer />
        <DustAndHazeLayerContainer />
      </Map>
    );
  }
}

export default EventMap;
