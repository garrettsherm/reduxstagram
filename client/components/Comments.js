// Node Modules
import React from 'react';

// Component to list comments & add/remove comments
const Comments = React.createClass({

	// Function to render individual comment
	renderComment(comment, i){
		return(
			<div className="comment" key={i}>
				<p>
					<strong>{comment.user}</strong>
					{comment.text}
					<button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
				</p>
			</div>
		)
	},

	// Function to handle submission of new comment
	// calls addComment action
	handleSubmit(e){
		e.preventDefault();
		const { postId } = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		this.props.addComment(postId, author, comment);
		this.refs.commentForm.reset();
	},

	render(){
		return(
			<div className="comments">
				{this.props.postComments.map(this.renderComment)}
				<form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit} >
					<input type="text" ref="author" placeholder="author" />
					<input type="text" ref="comment" placeholder="comment" />
					<input type="submit" hidden />
				</form>
			</div>
		);
	}
});

export default Comments;