import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../../propTypes/Event';
import LineStringLayer from '../../../components/Map/Layers/LineStringLayer';

class LineStringLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    features: this.props.lineStringEvents,
  }

  render() {
    return (
      <LineStringLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  lineStringEvents: state.events.filter(event => event.geometry.type === 'LineString'),
});

LineStringLayerContainer.propTypes = {
  lineStringEvents: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(LineStringLayerContainer);
