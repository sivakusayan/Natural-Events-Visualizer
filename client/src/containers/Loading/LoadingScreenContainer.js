/**
 * Allows us to give feedback messages to the user on the 
 * loading status of our application.
 */

import { connect } from 'react-redux';

import LoadingScreen from '../../components/Loading/LoadingScreen';

const mapStateToProps = state => ({
  dataIsLoading: state.isLoading.dataIsLoading,
  mapIsLoading: state.isLoading.mapIsLoading,
});

export default connect(mapStateToProps)(LoadingScreen);
