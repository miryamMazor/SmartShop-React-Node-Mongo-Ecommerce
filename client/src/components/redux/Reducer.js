import { produce } from 'immer'
import { json } from 'react-router'
import { createStore } from 'redux'
import { admin } from './Action'

const InitState = {
    currentUser: {},
    admin: {},
    currentCategory: {},
    currentProduct: [],
    totalAmount: 0 // הוספת משתנה לסכום המוצרים
}

const Reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            debugger
            state.currentUser = action.payload;
        // return state.currentUser = action.payload;
        // console.log(action.payload);
        // console.log(state.currentUser);
        // localStorage.setItem('user', JSON.stringify(state.currentUser))
        // console.log(JSON.parse(localStorage.getItem('user')));
        // state.currentCategory = { name: 'aaaaa' }
        // break;
        case 'SET_CURRENT_CATEGORY':
            state.currentCategory = action.payload;
            break;
        case 'SET_CURRENT_PRODUCT':
            state.currentProduct = action.payload;
            break;
        case 'SET_TOTAL_AMOUNT':
            state.totalAmount = action.payload;
            break;
        case 'MIN_TOTAL_AMOUNT':
            state.totalAmount += action.payload;
            break;
        case 'MAX_TOTAL_AMOUNT':
            state.totalAmount -= action.payload;
            break;
        case 'ADMIN':
            state.admin = action.payload;
            break;
        default:
            // console.log(state.currentUser);
            break;
    }
}, InitState)

const store = createStore(Reducer)
window.store = store
export default store;