import React from 'react';
import { Link } from 'react-router-dom';
import { Component } from 'react';

class MyWods extends Component {
  render() {
    const user = this.props.user;
    return (
      <div>
        <div>
          <h1>My List of Wods go here</h1>
        </div>
        <div>
          <Link to="/movement/create">Create a Wod</Link>
          <Link to="/wod/create">Create a Movement</Link>
        </div>
      </div>
    );
  }
}

export default MyWods;
