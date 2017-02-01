import React, { Component } from 'react';
import Header from './Header';
import {FormTeam, ListMatches, ListTeams} from './components/';
import {addTeam, generateId} from './lib/matchHelpers'
import './App.css';

export default class App extends Component {

      state = {
      teams : [
        { id: 1, name: "Leeds", star: false },
        { id: 2, name: "Liverpool", star: true },
        { id: 3, name: "Man City", star: false },
      ],
      matches: [
        { id: 1, teamA: "Leeds", teamB: "Man Utd", scoreA: 0, scoreB: 0, finished: false },
        { id: 2, teamA: "Liverpool", teamB: "Arsenal", scoreA: 0, scoreB: 0, finished: true },
        { id: 3, teamA: "Man City", teamB: "Chelsea", scoreA: 0, scoreB: 0, finished: false },
      ],
      addition: "abc"
    }

  handleEmptySubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      errorMessage: "Supply a name"
    })
  }

  handleTeamSubmit = (evt) => {
    evt.preventDefault();
    const newId = generateId();
    const newTeam = {
      name: this.state.addition, 
      star:false,
      id: newId
    }
    const updatedTeams = addTeam(this.state.teams, newTeam);
    this.setState({
      teams: updatedTeams,
      addition: "",
      errorMessage: ""
    });
  }

  handleInputChange = (evt) => {
    this.setState({
      addition: evt.target.value
    })
  }

  render() {
    const submitHandler = this.state.addition ? this.handleTeamSubmit : this.handleEmptySubmit;
    const fbTeamList = [];
     Object.keys(this.props.teams).forEach( key => {
      fbTeamList.push(this.props.teams[key]);
    })

    console.log('snapshot', this.props);
    return (
      <div className="App">
        <Header />
        <div className="App-intro">Matches

          <ListMatches matches={this.state.matches} />
          <ListTeams teams={this.state.teams} />
          {this.state.errorMessage && <span className="error">{this.state.errorMessage}</span>}
          <FormTeam handleInputChange={this.handleInputChange} 
                    addition={this.state.addition}
                    handleSubmit={submitHandler} />
          <button onClick={this.handleTeamSubmit} >
            Add team
          </button>
          <button onClick={() => this.props.addTeam({ name: this.state.addition, region: 'UK' })} >
            Add FB team
          </button>
          <div className="App-intro">
            <ul>
              {fbTeamList.map(team =>
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

