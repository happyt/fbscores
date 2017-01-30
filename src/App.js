import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log('snapshot', this.props);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Here</h2>
        </div>
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

export default App;
