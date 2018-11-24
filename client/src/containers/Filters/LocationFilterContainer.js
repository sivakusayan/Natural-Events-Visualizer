import React from 'react';
import { connect } from 'react-redux';

import { setLatitude, setLongitude, setRadius } from '../../state/actions/filters';
import { toggleLocation } from '../../state/actions/filtersAreActive';
import LocationFilter from '../../components/Filters/LocationFilter';
import { isValidLatitude, isValidLongitude, isValidRadius } from '../../utils/isValid';

class LocationFilterContainer extends React.Component {
  state = {
    latitudeIsValid: false,
    longitudeIsValid: false,
    radiusIsValid: true,
  }

  onLatitudeChange = (e) => {
    const value = e.target.value;
    this.setState(state => ({
      ...state,
      latitudeIsValid: isValidLatitude(value),
    }));
    this.props.setLatitude(value);
  }

  onLongitudeChange = (e) => {
    const value = e.target.value;
    this.setState(state => ({
      ...state,
      longitudeIsValid: isValidLongitude(value),
    }));
    this.props.setLongitude(value);
  }

  onRadiusChange = (e) => {
    const value = e.target.value;
    this.setState(state => ({
      ...state,
      radiusIsValid: isValidRadius(value),
    }));
    this.props.setRadius(value);
  }

  render() {
    const { filter, isActive, toggleLocation: toggle } = this.props;
    const { latitudeIsValid, longitudeIsValid, radiusIsValid } = this.state;
    const onChange = {
      latitude: this.onLatitudeChange,
      longitude: this.onLongitudeChange,
      radius: this.onRadiusChange,
    };
    const isValid = {
      latitude: latitudeIsValid,
      longitude: longitudeIsValid,
      radius: radiusIsValid,
    };
    return (
      <LocationFilter
        filter={filter}
        isActive={isActive}
        isValid={isValid}
        onChange={onChange}
        toggle={toggle}
      />
    );
  }
}

const mapStateToProps = state => ({
  filter: state.filters.location,
  isActive: state.filtersAreActive.location,
});

export default connect(mapStateToProps, {
  setLatitude, setLongitude, setRadius, toggleLocation,
})(LocationFilterContainer);
