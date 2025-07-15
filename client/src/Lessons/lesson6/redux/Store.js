// ספריה שמאפשרת לשנות משתנים קונסטיים
import { produce } from 'immer'
import { createStore } from 'redux'
// 1. state
// סטייט מאותחל - initialState - שם מקובל
// אובייקט ג'סון שיכיל את כל המשתנים הגלובליים
const initialState = {
    currentUser: {},

    products: [
        { id: 1, desc: 'chocolate', price: '6' },
        { id: 2, desc: 'chips', price: '4' },
        { id: 3, desc: 'bamba', price: '2' },
        { id: 4, desc: 'candies', price: '10' },
        { id: 5, desc: 'wine', price: '30' },
        { id: 6, desc: 'cola', price: '6' }
    ],

    currentProduct: {}
}

// 3. reducer
// פונקציה שמפעילה את הפעולו תבפועל על המשתנים
// reducer - מקובל, לא חובה
// produce - מקבלת שני ארגומנטים:
// 1. callback
// 2. הסטייט שעליו נפעיל את הפעולות

// הפונקציה הפנימית מקבלת שני ארגומנטים:
// 1. state - הסטייט שעליו נפעיל את הפעולות ונשלח כפרמטר לפונקציה החיצונית
// 2. action - הפעולה שהרדיוסר תפס
const reducer = produce((state, action) => {
    debugger
    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.currentUser = action.payload;
            break;
        case 'SET_CURRENT_PRODUCT':
            let product = state.products.filter(p => p.id == action.payload)[0]
            state.currentProduct = product;
            break;
        case 'ADD_PRODUCT':
            // let arr = state.product
            // arr.push(action.payload)
            // state.products = arr;
            state.products = [...state.products, action.payload]
            break;
        default:
            break;
    }
}, initialState)

// 4. store
// האחסון של הנתונים - מאגד את הסטייט והרדיוסר
const store = createStore(reducer)
// הגדרה זו מכירה לדפדפן את המחסן עם הנתונים הגלובליים של הפרויקט
window.store = store
export default store;