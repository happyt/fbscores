import {addMatch} from './matchHelpers'

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
