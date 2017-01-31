import React, { Component } from 'react';
import Header from './Header';
import './App.css';

export default class App extends Component {
  render() {
      const teamList = [];
      Object.keys(this.props.teams).forEach( key => {
        teamList.push(this.props.teams[key]);
      })

    console.log('snapshot', this.props);
    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          <form>
            <input type="text" />
          </form>
          <button onClick={() => this.props.addTeam({ name: 'China', region: 'Asia' })} >
            Add Stuff
          </button>
          <div className="App-intro">
            <ul>
              {teamList.map(team => 
                <li key={team.id}>
                  {team.name}
                </li>)}
            </ul>
          </div>
        </div>
        <p className="App-intro">
          {JSON.stringify(this.props.fred)}
        </p>
      </div>
    );
  }
}

