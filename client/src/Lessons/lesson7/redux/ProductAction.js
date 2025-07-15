export const setCurrentProduct = (id) => {
    return { type: 'SET_CURRENT_PRODUCT', payload: id }
}

export const addProduct = (product) => {
    return { type: 'ADD_PRODUCT', payload: product }
}

export const deleteProduct = (id) => {
    return { type: 'REMOVE_PRODUCT', payload: id }
}