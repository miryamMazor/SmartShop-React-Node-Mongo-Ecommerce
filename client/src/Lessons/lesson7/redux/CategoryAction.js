export const addCategory = (desc) => {
    return { type: 'ADD_CATEGORY', payload: desc }
}

export const deleteCategory = (id) => {
    return { type: 'REMOVE_CATEGORY', payload: id }
}