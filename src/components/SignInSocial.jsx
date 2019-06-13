import React, { Component } from 'react';
import { signInWithGoogle } from '../firebase';


class SignInSocial extends Component {
  render() {
    return (
      <div className="SignInSocial">
        <button onClick={signInWithGoogle}>Sign In With Google</button>
        <button onClick={signInWithGoogle}>Sign In With Twitter</button>
        <button onClick={signInWithGoogle}>Sign In With Facebook</button>
      </div>
    );
  }
}

export default SignInSocial;



