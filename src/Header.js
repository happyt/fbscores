import React, { Component } from 'react';
import logo from './logo.svg';

export default class Header extends Component {
  render() {
 //   console.log('header', this.props);
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Top</h2>
        </div>
    );
  }
}

