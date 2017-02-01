export const addMatch = (list, item) => [...list, item]

export const addTeam = (list, item) => [...list, item]

export const generateId = () => Math.floor(Math.random()*10000)

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleStar = (team) => ({...team, star: !team.star})

export const updateTeam = (list, updatedTeam) => {
 //   const updatedIndex = list.findIndex(item => item.id === updatedTeam.id)
    var updatedIndex;
    var found = list.some(function(item, index) { updatedIndex = index; return item.id === updatedTeam.id; });

    if (!found) {
        return list;
    }
    return [
        ...list.slice(0, updatedIndex), updatedTeam, ...list.slice(updatedIndex+1)
    ]
}