export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	};
};

export function addComment(postId, author, comment){
	console.log('addcomment firing');
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