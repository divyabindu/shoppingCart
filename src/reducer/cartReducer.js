const defaultState = {
    currentproducts: [],
}


function cartReducer(state = defaultState, action) {
    switch (action.type) {
        case "CART_NEW_ITEMS":
            return {
                ...state,
                currentproducts: [...state.currentproducts, action.payload]
            }
            
        case "EMPTY_ITEM":
            state = defaultState

        case "INCREMENT":
            const incIndex = state.currentproducts.findIndex(x => x.id === action.payload.id)
            state.currentproducts[incIndex].quantity += 1;
            return {
                ...state,
                currentproducts: state.currentproducts
            }

        case "DECREMENT":
            const descIndex = state.currentproducts.findIndex(x => x.id === action.payload.id)
            state.currentproducts[descIndex].quantity -= 1;
            return {
                ...state,
                currentproducts: state.currentproducts
            }

        case "REMOVE":
            const getIndex = state.currentproducts.findIndex(x => x.id === action.payload)
            state.currentproducts.splice(getIndex, 1);
            return {
                ...state,
                currentproducts: state.currentproducts
            }

        default: return state;
    }
}

export default cartReducer;