import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '@okta/okta-signin-widget/dist/css/okta-theme.css';

class SignInWidget extends Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    this.widget = new OktaSignIn({
      baseUrl: this.props.baseUrl,
      logo: 'logo.png',
authParams: {
    issuer: 'https://dev-414986.oktapreview.com/oauth2/0oak7ck8894o3wxin0h7',
    responseType: ['id_token', 'token'],
    scopes: ['openid', 'email', 'profile'],
  },
i18n: {
    //Overrides default text when using English. Override other languages by adding additional sections.
    'en': {
      'primaryauth.title': 'User Log In',   // Changes the sign in text
      'primaryauth.submit': 'Log In',  // Changes the sign in button
      // More e.g. [primaryauth.username.placeholder,  primaryauth.password.placeholder, needhelp, etc.].
      // Full list here: https://github.com/okta/okta-signin-widget/blob/master/packages/@okta/i18n/dist/properties/login.properties
    }
},
features: {
    registration: true,                 // Enable self-service registration flow
    rememberMe: true,                   // Setting to false will remove the checkbox to save username
    //multiOptionalFactorEnroll: true,  // Allow users to enroll in multiple optional factors before finishing the authentication flow.
    //selfServiceUnlock: true,          // Will enable unlock in addition to forgotten password
    //smsRecovery: true,                // Enable SMS-based account recovery
    //callRecovery: true,               // Enable voice call-based account recovery
    router: true,                       // Leave this set to true for the API demo
  },
    });
    this.widget.renderEl({ el }, this.props.onSuccess, this.props.onError);
  }

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
    return <div />;
  }
}

export default SignInWidget;
