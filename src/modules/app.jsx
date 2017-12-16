import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import Main from 'modules/main';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route path='/' component={ Main } />
      </Switch>
    );
  }
}

export default App;
