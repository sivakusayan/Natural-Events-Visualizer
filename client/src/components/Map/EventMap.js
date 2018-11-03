import React from 'react';
import ReactMapboxGl, { GeoJSONLayer } from 'react-mapbox-gl';

import KEY from '../../../../constants/MAPBOX_API_KEY';
import STYLE from '../../../../constants/MAPBOX_STYLE';

import { getDroughtGeoJSON, droughtCircleLayout, droughtCirclePaint } from '../../mapConfig/droughtLayer';

const Map = ReactMapboxGl({
  accessToken: KEY,
  minZoom: 2,
  maxZoom: 12,
});

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
        />
      </Map>
    );
  }
}

export default EventMap;
