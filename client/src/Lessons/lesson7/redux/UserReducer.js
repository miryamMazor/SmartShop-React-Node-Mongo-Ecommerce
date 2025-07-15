import produce from "immer";

const initialState = {

    currentUser: {}
}

const userReducer = produce((state, action) => {
    debugger
    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload;
            break;
        default:
            break;
    }
}, initialState)

export default userReducer