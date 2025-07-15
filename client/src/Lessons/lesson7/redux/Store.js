import { combineReducers, createStore } from "redux";
import userReducer from "./UserReducer";
import productReducer from "./ProductReducer";
import categoryReducer from "./CategoryReducer";

// יצירת רדיוסר שמשלב כמה רדיוסרים
const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    category: categoryReducer
})

// הפונקציה של יצירת הסטור תקבל את הרדיוסר המשלוב
const store = createStore(rootReducer)
window.store = store
export default store;