// 2. actions
// הצהרות על הפעולות שרוצים לעשות במשתנים הגלובליים
// רק פעולות של הוספה, עדכון מחיקה והצבה - שינוי
// שליפה מתבצעת בדך שונה - נראה בהמשך...

export const setCurrentUser = (user) => {
    return { type: 'SET_CURRENT_USER', payload: user }
}

export const setCurrentProduct = (id) => {
    return { type: 'SET_CURRENT_PRODUCT', payload: id }
}

export const addProduct = (product) => {
    return { type: 'ADD_PRODUCT', payload: product }
}