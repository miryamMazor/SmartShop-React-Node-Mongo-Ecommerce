export const setCurrentUser=(user)=>{
    return {type:'SET_CURRENT_USER',payload:user}
}
export const  setCurrentCategory=(category)=>{
    return {type:'SET_CURRENT_CATEGORY',payload:category}
}
export const setCurrentProduct=(product)=>{
    return {type:'SET_CURRENT_PRODUCT',payload:product}
}
export const setTotalAmount = (amount) => ({
    type: 'SET_TOTAL_AMOUNT',
    payload: amount
});
export const maxTotalAmount = (amount) => ({
    type: 'SET_TOTAL_AMOUNT',
    payload: amount
});
export const minTotalAmount = (amount) => ({
    type: 'SET_TOTAL_AMOUNT',
    payload: amount
});
export const admin = (amount) => ({
    type: 'ADMIN',
    payload: amount
});