//Reducer for adding new comment & removing new comment
function postComments(state = [], action){
	switch(action.type){
		// On add comment, add new comment to state
		case 'ADD_COMMENT' :
			return [...state, {
				user: action.author,
				text: action.comment
			}];
		// on remove comment, remove comment from state
		case 'REMOVE_COMMENT' :
			return [
				...state.slice(0,action.i),
				...state.slice(action.i + 1)
			]
		// else return default state
		default :
			return state;
	}
	return state;
}; 

// If post exists call postComments reducer
// else return state unchanged
function comments(state = [], action){
	if(typeof action.postId !== 'undefined'){
		return {
			...state,
			[action.postId]: postComments(state[action.postId], action)
		}
	}
	return state;
}


export default comments;