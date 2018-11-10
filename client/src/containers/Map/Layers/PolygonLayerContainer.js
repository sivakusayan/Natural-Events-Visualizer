import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../../propTypes/Event';
import PolygonLayer from '../../../components/Map/Layers/PolygonLayer';

class PolygonLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    features: this.props.polygonEvents,
  }

  render() {
    return (
      <PolygonLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  polygonEvents: state.events.filter(event => event.geometry.type === 'Polygon'),
});

PolygonLayerContainer.propTypes = {
  polygonEvents: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(PolygonLayerContainer);
