import { connect } from 'react-redux';

import { toggleMainPage } from '../../state/actions/hideMainPage';
import ToggleMainPageLink from '../../components/Links/ToggleMainPageLink';

export default connect(null, { toggleMainPage })(ToggleMainPageLink);
