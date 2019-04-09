import React, { Component } from 'react';

class Staff extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: ''
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div>
        <h1>Welcome {currentUserName}</h1>
        <p>Email: {currentUserEmail}</p>
        <p>You have reached the authorized staff area of the portal</p>
        <a href="https://dev-414986.oktapreview.com/home/boxnet/0oaj0xvxefgJZ5O2b0h7/37" target="_blank">Box</a>
      </div>
    );
  }
}

export default Staff;
