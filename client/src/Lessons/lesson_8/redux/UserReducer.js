import produce from "immer";

const initialState = {
    users:[
        {username:'Sivan',password:3262,phone:`0534845052`,address:`givat zeev`},
        {username:'Chen',password:1234,phone:`0534845052`,address:`givat zeev`},
        {username:'Michal',password:9876,phone:`0534845052`,address:`givat zeev`}
    ],
    currentUser: {}
}

const userReducer = produce((state, action) => {
    debugger
    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload;
            break;
        case 'ADD_USER':
            state.users =[...state.users, action.payload];
            break;
        case 'DELETE_USER':
            let index=state.users.findIndex(x=>x==action.payload)
           
            break;
        default:
            break;
    }
}, initialState)

export default userReducer