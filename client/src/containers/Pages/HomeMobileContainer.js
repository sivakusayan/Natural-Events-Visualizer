import { connect } from 'react-redux';

import HomeMobile from '../../components/Pages/HomeMobile';

const mapStateToProps = state => ({
  hide: state.hideMainPage,
});

export default connect(mapStateToProps)(HomeMobile);
