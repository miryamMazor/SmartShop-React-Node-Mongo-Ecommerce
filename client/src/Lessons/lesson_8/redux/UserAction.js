export const setCurrentUser = (user) => {
    return { type: 'SET_CURRENT_USER', payload: user }
}
export const addUser = (user) => {
    return { type: 'ADD_USER', payload: user }
}
export const deletUser = (id) => {
    return { type: 'DELETE_USER', payload: id }
}
