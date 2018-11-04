import React from 'react';
import ReactMapboxGl, { ZoomControl, ScaleControl, RotationControl } from 'react-mapbox-gl';

import KEY from '../../constants/MAPBOX_API_KEY';
import STYLE from '../../constants/MAPBOX_STYLE';

import PointLayerContainer from '../../containers/Map/PointLayerContainer';
import LineStringLayerContainer from '../../containers/Map/LineStringLayerContainer';
import LineStringEndpointsLayerContainer from '../../containers/Map/LineStringEndpointsLayerContainer';
import PolygonLayerContainer from '../../containers/Map/PolygonLayerContainer';

const Map = ReactMapboxGl({
  accessToken: KEY,
  minZoom: 2,
  maxZoom: 12,
});

const EventMap = () => (
  <Map
    style={STYLE}
    containerStyle={{
      height: '100vh',
      width: '100vw',
    }}
    zoom={[2]}
  >
    <ZoomControl
      zoomDiff={1}
    />
    <ScaleControl />
    <RotationControl />

    <PointLayerContainer />
    <LineStringLayerContainer />
    <LineStringEndpointsLayerContainer />
    <PolygonLayerContainer />

  </Map>
);

export default EventMap;
