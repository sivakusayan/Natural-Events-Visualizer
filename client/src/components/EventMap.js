import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1Ijoic2l2YWt1c2F5YW4iLCJhIjoiY2ptNDB5c2gwMDlsaTN2cDg1YTlsNzF6ZiJ9.7sLacRDby1sFJZA4IW03zw',
  minZoom: 2,
  maxZoom: 12,
});

// in render()
export default () => (
  <Map
    style="mapbox://styles/sivakusayan/cjnk1zlbxdpag2snau9m67nit"
    containerStyle={{
      height: '100vh',
      width: '100vw',
    }}
    zoom={[2]}
  />
);
