// Node Modules
import React from 'react';
import Photo from './Photo';

// Components
import Comments from './Comments'

// Component for rending page for individual post
const Single = React.createClass({
  render() {

  	const { postId } = this.props.params;
  	const i = this.props.posts.findIndex((post) => post.code === postId);
  	const post = this.props.posts[i];
    
    // Get comments for this specific photo
  	const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
      	<Photo i={i} post={post} {...this.props} />
      	<Comments postComments={postComments} {...this.props} />
      </div>
    )
  }
});

export default Single;