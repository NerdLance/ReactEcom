import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
    isOpen: false,
    cartCount: 0,
    cartTotal: 0,
    cartItems: []
}

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    const { type, payload } = action

    switch (type) {
        case CART_ACTION_TYPES.SET_IS_OPEN:
            return { ...state, isOpen: payload }
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return { 
                ...state, 
                cartItems: payload
            }
        default:
            return state
    }
}