export const addMatch = (list, item) => [...list, item]

export const addTeam = (list, item) => [...list, item]

export const generateId = () => Math.floor(Math.random()*10000)

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleStar = (team) => ({...team, star: !team.star})

export const updateTeam = (list, updatedTeam) => {
//   const updatedIndex = list.findIndex(item => item.id === updatedTeam.id)
// console.log(list, updatedTeam);
    var updatedIndex;
    var found = list.some(function(item, index) { updatedIndex = index; return item.id === updatedTeam.id; });

    if (!found) {
        return list;
    }
    return [
        ...list.slice(0, updatedIndex), updatedTeam, ...list.slice(updatedIndex+1)
    ]
}

export const removeTeam = (list, id) => {
  // not yet,   const removeIndex = list.findIndex(item => item.id === id)

    var removeIndex;
    var found = list.some(function(item, index) { removeIndex = index; return item.id === id; });

    if (!found) {
        return list;
    }
    return [
        ...list.slice(0, removeIndex),  ...list.slice(removeIndex+1)
    ]
}