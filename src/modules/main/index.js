import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main from './components';
import * as actions from './action-creators';

const mapStateToProps = ({
  main,
}) => ({
  ...main,
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
