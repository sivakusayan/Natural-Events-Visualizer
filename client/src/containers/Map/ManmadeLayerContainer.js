/**
 * Passes data that should be rendered into the manmade layer.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from '../../propTypes/Event';

import ManmadeLayer from '../../components/Map/Layers/ManmadeLayer';

class ManmadeLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    // Filter for events with a categoryID of 19 (Manmade)
    features: this.props.events.filter(event => event.properties.categories.includes(19)),
  }

  render() {
    return (
      <ManmadeLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

ManmadeLayerContainer.propTypes = {
  /**
   * The list of all events in the database.
   */
  events: PropTypes.arrayOf(Event).isRequired,
};

export default connect(mapStateToProps)(ManmadeLayerContainer);
