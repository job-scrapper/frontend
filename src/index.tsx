import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from './router/auth0Context';
import history from './router/history';

ReactDOM.render(
  <Auth0Provider>
    <Router history={history}>
      <App />
    </Router>
  </Auth0Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
