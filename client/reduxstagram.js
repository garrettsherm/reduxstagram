// Node Modules
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Styles
import css from './styles/style.styl';

// Redux Store
import store, { history } from './store';

// Raven logging imports
import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

// Code for configuring raven/sentry error logging
//Raven.config(sentry_url, {
//	tags: {
//		git_commit: 'asfgasgasgsag',
//		userLevel: 'editor'
//	}
//}).install();

//logException(new Error('download failed'), {
//	email: 'test@test/com'
//});

//Raven.captureMessage('something');
//Raven.showReportDialog();

// Provider for redux store
// Router for history
// JSX for react application
const router = (
	<Provider store={store}>
	  <Router history={history}>
	    <Route path="/" component={App}>
	      <IndexRoute component={PhotoGrid}></IndexRoute>
	      <Route path="/view/:postId" component={Single}></Route>
	    </Route>
	  </Router>
  </Provider>
);

// Load application
render(router, document.getElementById('root'));