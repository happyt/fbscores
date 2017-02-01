import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const addLocation = function (data) { };
const updateLocation = function (id, data) { };
const addTeam = function (data) { };
const updateTeam = (id, data) => { };
const actions = {
  addLocation,
  updateLocation,
  addTeam,
  updateTeam
};

const store = {
  "fred": "fred",
  "locations": {
    "-KbkcBwTIhiYPg6jFXWO": {
      "name": "China",
      "region": "Asia"
    },
    "-KbkdPZdf0MwfacMdmLJ": {
      "name": "China",
      "region": "Asia"
    }
  },
  "teams": {
    "abc": {
      "id": 1,
      "name": "Chelsea",
      "region": "UK"
    },
    "def": {
      
      "id": 2,
      "name": "West Ham",
      "region": "Europe"
    }
  }

}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App {...actions} {...store} />, div);
});

