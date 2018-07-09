// Node Modules
import React from 'react';
import { Link } from 'react-router';

// Main component for Application
// React.cloneElement is used to pass props to children components in reduxstagram.js Route
const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;