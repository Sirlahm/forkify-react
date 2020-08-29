const INITIAL_STATE = {

    items : [],
    display: true
}
const Shuffle = (cartItems, cartItemToRemove) => {
    const existing = cartItems.find(
        cartItem => cartItem.title === cartItemToRemove.title
    )

    if(existing) {
        return cartItems.filter(cartItem => cartItem.title !== cartItemToRemove.title)
    }
    return [...cartItems, cartItemToRemove]
    
}

const likesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_LIKES_ITEM' : 
        return {
            ...state,
            display: false,
            items : Shuffle(state.items,action.payload)
            
        }
        default: 
        return state;
}
}

export default likesReducer
