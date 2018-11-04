/**
 * Passes data that should be rendered into the point layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../propTypes/Event';

import PointLayer from '../../components/Map/Layers/PointLayer';


class PointLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Filter for Point events
    features: this.props.pointEvents,
  }

  render() {
    return (
      <PointLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  pointEvents: state.events.filter(event => event.geometry.type === 'Point'),
});

PointLayerContainer.propTypes = {
  /**
   * The list of all point events in the database.
   */
  pointEvents: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(PointLayerContainer);
