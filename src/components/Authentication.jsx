import React, { Component } from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';

class Authentication extends Component {
  state = { 
    signIn: true,
  };

  setSignIn (signIn) {
    this.setState({ signIn })
  }

  render () {
    return (
      <div>
        { this.state.signIn ?  
            <SignIn setSignIn={(signIn) => this.setSignIn(signIn)}/> : 
            <SignUp setSignIn={(signIn) => this.setSignIn(signIn)} /> 
        }
      </div>
    )
  }
};

export default Authentication;
