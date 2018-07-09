// Node Modules
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import posts from './posts';
import comments from './comments';

// Create single rootReducer by combining posts & comments reducers
const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer; 