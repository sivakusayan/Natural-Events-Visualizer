import React from 'react';
import ReactMapboxGl, { ZoomControl, ScaleControl, RotationControl } from 'react-mapbox-gl';

import KEY from '../../../../constants/MAPBOX_API_KEY';
import STYLE from '../../../../constants/MAPBOX_STYLE';

import DroughtLayerContainer from '../../containers/Map/DroughtLayerContainer';
import DustAndHazeLayerContainer from '../../containers/Map/DustAndHazeLayerContainer';
import EarthquakesLayerContainer from '../../containers/Map/EarthquakesLayerContainer';
import FloodsLayerContainer from '../../containers/Map/FloodsLayerContainer';
import LandslidesLayerContainer from '../../containers/Map/LandslidesLayerContainer';
import ManmadeLayerContainer from '../../containers/Map/ManmadeLayerContainer';
import SeaAndLakeIceLayerContainer from '../../containers/Map/SeaAndLakeIceLayerContainer';
import SevereStormsLayerContainer from '../../containers/Map/SevereStormsLayerContainer';
import SnowLayerContainer from '../../containers/Map/SnowLayerContainer';
import TemperatureExtremesLayerContainer from '../../containers/Map/TemperatureExtremesLayerContainer';
import VolcanoesLayerContainer from '../../containers/Map/VolcanoesLayerContainer';
import WaterColorLayerContainer from '../../containers/Map/WaterColorLayerContainer';
import WildfiresLayerContainer from '../../containers/Map/WildfiresLayerContainer';

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
    <DroughtLayerContainer />
    <DustAndHazeLayerContainer />
    <EarthquakesLayerContainer />
    <FloodsLayerContainer />
    <LandslidesLayerContainer />
    <ManmadeLayerContainer />
    <SeaAndLakeIceLayerContainer />
    <SevereStormsLayerContainer />
    <SnowLayerContainer />
    <TemperatureExtremesLayerContainer />
    <VolcanoesLayerContainer />
    <WaterColorLayerContainer />
    <WildfiresLayerContainer />
  </Map>
);

export default EventMap;
