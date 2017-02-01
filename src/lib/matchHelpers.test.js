import {addMatch, findById, toggleStar, updateTeam} from './matchHelpers'

test('addMatch should add the passed match to the list', () => {
    const startMatches = [
        { id: 1, teamA: "Leeds", teamB: "Man Utd", scoreA: 0, scoreB: 0, finished: false },
        { id: 2, teamA: "Liverpool", teamB: "Arsenal", scoreA: 0, scoreB: 0, finished: true }
    ]
    const newMatch = 
        { id: 3, teamA: "Man City", teamB: "Chelsea", scoreA: 0, scoreB: 0, finished: false }

    const expected = [
        { id: 1, teamA: "Leeds", teamB: "Man Utd", scoreA: 0, scoreB: 0, finished: false },
        { id: 2, teamA: "Liverpool", teamB: "Arsenal", scoreA: 0, scoreB: 0, finished: true },
        { id: 3, teamA: "Man City", teamB: "Chelsea", scoreA: 0, scoreB: 0, finished: false }
    ]
    const result = addMatch(startMatches, newMatch)

    expect(result).toEqual(expected)
})

test('addMatch should not mutate the match array', () => {
    const startMatches = [
        { id: 1, teamA: "Leeds", teamB: "Man Utd", scoreA: 0, scoreB: 0, finished: false },
        { id: 2, teamA: "Liverpool", teamB: "Arsenal", scoreA: 0, scoreB: 0, finished: true }
    ]
    const newMatch = 
        { id: 3, teamA: "Man City", teamB: "Chelsea", scoreA: 0, scoreB: 0, finished: false }

    const expected = [
        { id: 1, teamA: "Leeds", teamB: "Man Utd", scoreA: 0, scoreB: 0, finished: false },
        { id: 2, teamA: "Liverpool", teamB: "Arsenal", scoreA: 0, scoreB: 0, finished: true },
        { id: 3, teamA: "Man City", teamB: "Chelsea", scoreA: 0, scoreB: 0, finished: false }
    ]
    const result = addMatch(startMatches, newMatch)

    expect(result).not.toBe(startMatches)
})

test('findById should return the expected item from the array', () => {
    const startTeams = [
        { id: 1, name: "Leeds", star: false },
        { id: 2, name: "Liverpool", star: true },
        { id: 3, name: "Man City", star: false }
      ]
    const expected = {id:2, name:"Liverpool", star:true}
    const result = findById(2, startTeams)
    expect(result).toEqual(expected)
})

test('toggleStar should toggle the star prop of a team', () => {
    const startTeam = { id: 1, name: "Leeds", star: false }
    const expected = { id:1, name:"Leeds", star:true }
    const result = toggleStar(startTeam)
    expect(result).toEqual(expected)
})

test('toggleStar should not mutate the original team', () => {
    const startTeam = { id: 1, name: "Leeds", star: false }
    const result = toggleStar(startTeam)
    expect(result).not.toBe(startTeam)
})


test('updateTeam should update a team by id', () => {
    const startTeams = [
        { id: 1, name: "Leeds", star: false },
        { id: 2, name: "Liverpool", star: true },
        { id: 3, name: "Man City", star: false }
      ]
    const updatedTeam = {id:1, name:"Arsenal", star:true}
    const expectedTeams = [
        { id: 1, name: "Arsenal", star: true },
        { id: 2, name: "Liverpool", star: true },
        { id: 3, name: "Man City", star: false }
      ]
    const result = updateTeam(startTeams, updatedTeam)
    expect(result).toEqual(expectedTeams)
})

test('updateTeam should not mutate the original array', () => {
    const startTeams = [
        { id: 1, name: "Leeds", star: false },
        { id: 2, name: "Liverpool", star: true },
        { id: 3, name: "Man City", star: false }
      ]
    const updatedTeam = {id:1, name:"Arsenal", star:true}
    const result = updateTeam(startTeams, updatedTeam)
    expect(result).not.toBe(startTeams)
})