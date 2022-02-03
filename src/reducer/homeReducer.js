const defaultState = {
    menu: []
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case "MENU":
            return {
                ...state,
                menu: action.payload
            }
        case "PRODUCTS":
            return {
                ...state,
                product: action.payload
            }

            case "BANNER":
            return {
                ...state,
                bannerItems: action.payload
            }

            case "CATEGORIES":
            return {
                ...state,
                catagories: action.payload
            }
            
        default: return state;
    }
}

export default reducer;