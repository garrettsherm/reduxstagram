export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	};
};

export function addComment(postID, author, comment){
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	};
};

export function removeComent(postId, i){
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	};
};