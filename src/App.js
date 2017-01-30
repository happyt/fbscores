import React, { Component } from 'react';
import Header from './Header';
import './App.css';

export default class App extends Component {
  render() {
    console.log('snapshot', this.props);
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          {JSON.stringify(this.props)}
        </p>
        <button onClick={() => this.props.addLocation({ name: 'China', region: 'Asia' })} >
        Add Stuff
        </button>
        <p className="App-intro">
          {JSON.stringify(this.props.abc)}
        </p>
      </div>
    );
  }
}

