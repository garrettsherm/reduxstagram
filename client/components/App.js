// Main App Component

// Node Modules
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import * as actionCreators from '../actions/actionCreators';

// Main Component
import Main from './Main';

// Function to connect state to props
function mapStateToProps(state){
	return {
		posts: state.posts,
		comments: state.comments
	}
}

// Function connect actions to redux dispatch
function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

// connect components to redux store by passing state & dispatch through props
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;

