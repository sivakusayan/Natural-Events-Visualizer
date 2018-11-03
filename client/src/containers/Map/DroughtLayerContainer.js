/**
 * Passes data that should be rendered into the drought layer.
 */

import React from 'react';
import { connect } from 'react-redux'; 

import DroughtLayer from '../../components/Map/Layers/DroughtLayer';

class DroughtLayerContainer extends React.Component {
  geoJSON = {
    type: 'FeatureCollection',
    features: this.props.events.filter(event => event.properties.categories.includes(6)),
  }

  render() {
    return (
      <DroughtLayer geoJSON={this.geoJSON} />
    );
  }
}

const mapStateToProps = state => ({
  events: state.events,
});

export default connect(mapStateToProps)(DroughtLayerContainer);
