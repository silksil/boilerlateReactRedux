import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Users from './containers/Users';

class App extends Component {
  render () {
    return (
      <div>
        <div>
          <Link to="/">Users</Link>
        </div>
        <div>
          <Route path="/" exact component={Users} />
        </div>
      </div>
    );
  }
}

export default App;
