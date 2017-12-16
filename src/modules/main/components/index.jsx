import React from 'react';
import PropTypes from 'prop-types';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.initPage();
  }

  componentWillUnmount() {
    this.props.cleanPage();
  }

  render() {
    return (
      <div>
        Main
      </div>
    );
  }
}

Main.propTypes = {
  initPage: PropTypes.func.isRequired,
  cleanPage: PropTypes.func.isRequired,
};

export default Main;
