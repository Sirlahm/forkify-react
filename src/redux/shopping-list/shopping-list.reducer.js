const INITIAL_STATE = {
    ingredient : []
}

const Shuffle = (cartItems, cartItemToRemove) => {
    const existing = cartItems.find(
        cartItem => cartItem[0] === cartItemToRemove[0]
    )

    if(existing) {
        return [...cartItems]
    }
    return [...cartItems, cartItemToRemove]
    
}
const Remove = (cartItems, cartItemToRemove) => {
    const existing = cartItems.find(
        cartItem => cartItem[0] === cartItemToRemove[0]
    )

    if(existing) {
        return cartItems.filter(cartItem => cartItem[0] !== cartItemToRemove[0])
    }
    return [...cartItems, cartItemToRemove]
    
}

const shoppingReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case 'GET_SHOPPING_ITEM' : 
        return {
            ...state,
            ingredient: Shuffle(state.ingredient,action.payload)
            
        }
        case 'REMOVE_SHOPPING_ITEM' : 
        return {
            ...state,
            ingredient: Remove(state.ingredient,action.payload)
            
        }
        default: 
        return state;
}


}

export default shoppingReducer