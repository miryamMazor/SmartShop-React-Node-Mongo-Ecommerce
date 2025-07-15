import produce from "immer";

// יצירת סטייט ייחודי לקטגוריות
// יכיל רק את המשתנים הגלובליים השייכים לקטגוריות
// כמו שיצרנו סרוויס נפרד לכל מחלקה
const initialState = {
    categories: [
        { id: 1, desc: 'dairy' },
        { id: 2, desc: 'meety' },
        { id: 3, desc: 'parve' }
    ],

    counter: 3
}

// יצירת רדיוסר נפרד לקטגוריות
// יפעיל רק את הפונקציות ששיכות לקטגוריות
// כשיש כמה רדיוסרים - ברגע שנזרקת פעולה - כל אחד מהרדיוסרים בודק האם הפעולה שייכת לו
// לכן יש צורך לתת שמות מזהים לפעולות
const categoryReducer = produce((state, action) => {
    debugger
    switch (action.type) {
        case 'ADD_CATEGORY':
            debugger
            // let category = { id: state.categories[state.categories.length - 1].id + 1, desc: action.payload }
            let category = { id: ++state.counter, desc: action.payload }
            debugger
            state.categories = [...state.categories, category]
            break;
        case 'REMOVE_CATEGORY':
            let index = state.categories.findIndex(x => x.id == action.payload)
            state.categories.splice(index, 1)
            break;
        default:
            break;
    }
}, initialState)

// ייצוא של הרדיוסר
// בצורה דיפולטיבית
export default categoryReducer