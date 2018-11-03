import React from 'react';
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl';
import * as MapboxGL from 'mapbox-gl';

import KEY from '../../../../constants/MAPBOX_API_KEY';
import STYLE from '../../../../constants/MAPBOX_STYLE';

import { getDroughtGeoJSON, droughtSymbolLayout, droughtSymbolPaint, droughtCircleLayout, droughtCirclePaint } from '../../mapConfig/droughtLayer';

const Map = ReactMapboxGl({
  accessToken: KEY,
  minZoom: 2,
  maxZoom: 12,
});

const lineLayout = {
  'line-cap': 'round',
  'line-join': 'round',
};

const linePaint = {
  'line-color': '#000',
  'line-width': 12,
};

const polygonPaint = {
  'fill-color': '#6F788A',
  'fill-opacity': 0.7,
};

class EventMap extends React.Component {
  state = {
    droughtGeoJSON: getDroughtGeoJSON(this.props.events),
  }

  render() {
    const { droughtGeoJSON } = this.state;
    return (
      <Map
        style={STYLE}
        containerStyle={{
          height: '100vh',
          width: '100vw',
        }}
        zoom={[2]}
      >
        <GeoJSONLayer
          data={droughtGeoJSON}
          circleLayout={droughtCircleLayout}
          circlePaint={droughtCirclePaint}
          symbolLayout={droughtSymbolLayout}
          symbolPaint={droughtSymbolPaint}
        />
      </Map>
    );
  }
}

export default EventMap;
