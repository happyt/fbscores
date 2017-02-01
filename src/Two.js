import React, { Component } from 'react';
import Header from './Header';
import './App.css';

export default class Two extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
           {JSON.stringify(this.props.teams)}
        </p>
      </div>
    );
  }
}

