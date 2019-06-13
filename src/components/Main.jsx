import React, { Component } from 'react';

import { signOut } from '../firebase';




class Main extends Component {
  render() {
    return (
      <div className="Application">
        <button onClick={signOut}>Sign Out</button>
        this is main page
      </div>
    );
  }
}

export default Main;
