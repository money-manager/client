import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import 'babel-polyfill';

import store from './store';

import App from 'modules/app';

import 'styles/main.sass';

ReactDOM.render(
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('app'),
);
