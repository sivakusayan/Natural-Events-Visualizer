/**
 * @fileoverview Renders the mapbox map for the user to interact with. 
 * 
 * The data is divided into four individual layers for independent styling. 
 * The PointLayer, LineStringLayer, and PolygonLayer all contain GeoJSON
 * Point, LineString, and Polygon events respectively. The LineString layer
 * is augmented with its endpoints to show the user what the most recent
 * location was.
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactMapboxGl, { ZoomControl, ScaleControl, RotationControl } from 'react-mapbox-gl';

import KEY from '../../constants/MAPBOX_API_KEY';
import STYLE from '../../constants/MAPBOX_STYLE';

import PointLayerContainer from '../../containers/Map/Layers/PointLayerContainer';
import LineStringLayerContainer from '../../containers/Map/Layers/LineStringLayerContainer';
import LineStringEndpointsLayerContainer from '../../containers/Map/Layers/LineStringEndpointsLayerContainer';
import PolygonLayerContainer from '../../containers/Map/Layers/PolygonLayerContainer';
import EventPopup from '../../containers/Map/EventPopupContainer';

/**
 * Limiting the maxZoom of the map increases performance,although
 * it shouldn't matter too much right now as our dataset is still small. 
 * Still good to have, especially since it doesn't limit the user too 
 * much in the context of this app.
 * 
 * https://www.mapbox.com/help/working-with-large-geojson-data/
 */
const Map = ReactMapboxGl({
  accessToken: KEY,
  minZoom: 2,
  maxZoom: 12,
});

const EventMap = ({
  setSelectedEvent, resetSelectedEvent, updateCenter, updateZoom, renderPopup, center, zoom,
}) => (
  <Map
    style={STYLE}
    containerStyle={{
      height: '100vh',
      width: '100vw',
    }}
    zoom={zoom}
    center={center}
    onClick={setSelectedEvent}
    onMouseDown={resetSelectedEvent}
    onTouchStart={resetSelectedEvent}
    onDragEnd={updateCenter}
    onZoomEnd={updateZoom}
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

    {renderPopup && <EventPopup />}
  </Map>
);

EventMap.propTypes = {
  /**
   * Center of the map view being shown to the user.
   * Updated at the end of a drag event.
   */
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  /**
   * Zoom level that the user is on. Updated at the
   * end of a zoom event.
   */
  zoom: PropTypes.number.isRequired,
  /**
   * Checks the nearest rendered features around
   * the click location. If the closest one is an
   * event on the map, set that event to be the 
   * application's selected event.
   */
  setSelectedEvent: PropTypes.func.isRequired,
  /**
   * Sets the selected event to null. This makes sure
   * that the previous selected event is no longer
   * active if the user tries to move away.
   */
  resetSelectedEvent: PropTypes.func.isRequired,
  /**
   * Updates the center state with the current
   * center of the map.
   */
  updateCenter: PropTypes.func.isRequired,
  /**
   * Updates the center state with the current
   * zoom of the map.
   */
  updateZoom: PropTypes.func.isRequired,
  /**
   * True if there is a selected event, false otherwise.
   */
  renderPopup: PropTypes.bool.isRequired,
};

export default EventMap;
