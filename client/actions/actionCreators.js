// List of actions for application
// Actions outline information that are sent from application to store

// Action to handle adding a like (clicking heart button)
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	};
};

// Action to handle adding a new comment to a post
export function addComment(postId, author, comment){
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	};
};

// Action to handle removing a comment from a post
export function removeComment(postId, i){
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	};
};