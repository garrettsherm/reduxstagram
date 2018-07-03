import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
	render(){
		return(
			<h1>
				<Link to="/">GarrettGram</Link>
			</h1>
		);
	}
});

export default Main;