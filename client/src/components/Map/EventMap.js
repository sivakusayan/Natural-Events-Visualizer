import React from 'react';
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl';

import KEY from '../../../../constants/MAPBOX_API_KEY';
import STYLE from '../../../../constants/MAPBOX_STYLE';

const Map = ReactMapboxGl({
  accessToken: KEY,
  minZoom: 2,
  maxZoom: 12,
});

// in render()
export default () => (
  <Map
    style={STYLE}
    containerStyle={{
      height: '100vh',
      width: '100vw',
    }}
    zoom={[2]}
  >
    <GeoJSONLayer
      data={}
      symbolLayout={{
        'text-field': '{place}',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 0.6],
        'text-anchor': 'top',
      }}
    />
  </Map>
);
