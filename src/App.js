import React, { Component } from 'react';
import Header from './Header';
import {FormTeam, ListMatches} from './components/';
import './App.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      matches: [
        { id: 1, teamA: "Leeds", teamB: "Man Utd", scoreA: 0, scoreB: 0, finished: false },
        { id: 2, teamA: "Liverpool", teamB: "Arsenal", scoreA: 0, scoreB: 0, finished: true },
        { id: 3, teamA: "Man City", teamB: "Chelsea", scoreA: 0, scoreB: 0, finished: false },
      ],
      addition: "abc"
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
    this.setState({
      addition: evt.target.value
    })
  }

  render() {
    const teamList = [];
     Object.keys(this.props.teams).forEach( key => {
      teamList.push(this.props.teams[key]);
    })

    console.log('snapshot', this.props);
    return (
      <div className="App">
        <Header />
        <div className="App-intro">Matches

          <ListMatches matches={this.state.matches} />

          <FormTeam handleInputChange={this.handleInputChange} addition={this.state.addition} />

          <button onClick={() => this.props.addTeam({ name: this.state.addition, region: 'UK' })} >
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

