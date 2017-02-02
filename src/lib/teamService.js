const baseUrl = "http://localhost:8080/teams"

export const loadTeams = () => {
    return fetch(baseUrl)
        .then(res => res.json())
}

export const createTeam = (team) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(team)
    }).then(res => res.json())
}

export const saveTeam = (team) => {
    return fetch(`${baseUrl}/${team.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(team)
    }).then(res => res.json())
}