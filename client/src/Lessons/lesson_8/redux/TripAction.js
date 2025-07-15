export const setCurrenTrip = (user) => {
   return { type: 'SET_CURRENT_TRIP', payload: user }
}
export const addTrip = (user) => {
   return { type: 'ADD_TRIP', payload: user }
}
export const deletTrip = (id) => {
   return { type: 'DELETE_TRIP', payload: id }
}
