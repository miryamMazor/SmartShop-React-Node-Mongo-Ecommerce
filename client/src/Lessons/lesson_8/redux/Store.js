import { combineReducers, createStore } from "redux";
import userReducer from "./UserReducer";
import tripReducer from "./TripReducer";
// יצירת רדיוסר שמשלב כמה רדיוסרים
const rootReducer = combineReducers({
    user: userReducer,
    trip: tripReducer
})

// הפונקציה של יצירת הסטור תקבל את הרדיוסר המשלוב
const store = createStore(rootReducer)
window.store = store
export default store;