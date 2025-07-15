import produce from "immer";

const initialState = {
    trips:[],
    currentTrip: {}
}

const tripReducer = produce((state, action) => {
    debugger
    switch (action.type) {
        case 'SET_CURRENT_TRIP':
            state.currentTrip = action.payload;
            break;
        case 'ADD_TRIP':
            state.trips =[...state.trips, action.payload];
            break;
        case 'DELETE_TRIP':
            let index=state.trips.findIndex(x=>x==action.payload)
            state.trips.splice(index,1)
            break;
        default:
            break;
    }
}, initialState)

export default tripReducer