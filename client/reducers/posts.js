export function posts(state = [], action){
	console.log("post going to change, post reducer hit");
	console.log(state, action);
	return state;
};

export default posts;