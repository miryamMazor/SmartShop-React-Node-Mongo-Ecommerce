import produce from "immer";

const initialState = {

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

const productReducer = produce((state, action) => {
    debugger
    switch (action.type) {
        case 'SET_CURRENT_PRODUCT':
            let product = state.products.filter(p => p.id == action.payload)[0]
            state.currentProduct = product;
            break;
        case 'ADD_PRODUCT':
            state.products = [...state.products, action.payload]
            break;
        case 'REMOVE_PRODUCT':
            let index = state.products.findIndex(x => x.id == action.payload)
            state.products.splice(index, 1)
            break;
        default:
            break;
    }
}, initialState)

export default productReducer