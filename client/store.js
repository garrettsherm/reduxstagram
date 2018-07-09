// Node Modules
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Reducers
import rootReducer from './reducers/index';

// Data for application
import comments from './data/comments';
import posts from './data/posts';

// Items in shared state
const defaultState = {
	posts,
	comments
};

// enhancer for redux dev-tools
const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

// create redux store
const store = createStore(rootReducer, defaultState, enhancers);

// sync browser history with store
export const history = syncHistoryWithStore(browserHistory, store);

// Hot reloading for reducers
if(module.hot){
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;

