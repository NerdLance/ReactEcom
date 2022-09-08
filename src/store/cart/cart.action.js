import { createAction } from '../../utils/reducer/reducer.utils'
import { CART_ACTION_TYPES } from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id)

    if (existingCartItem) {
        return cartItems.map((item) => 
            (item.id === productToAdd.id) 
                ? {...item, quantity: item.quantity + 1} 
                : item
        )
    }

    const newCartItems = [...cartItems, {...productToAdd, quantity: 1}]
    return newCartItems
}

const decreaseCartItem = (cartItems, productToDecrease) => {
    const existingCartItem = cartItems.find((item) => item.id === productToDecrease.id)

    if (existingCartItem) {
        const updatedCartItems = cartItems.map((item) => 
            (item.id === productToDecrease.id) 
                ? {...item, quantity: item.quantity - 1} 
                : item
        )

        return updatedCartItems.filter((item) => item.quantity > 0)
    }

    const newCartItems = [...cartItems, {...productToDecrease, quantity: 1}]
    return newCartItems
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find((item) => item.id === productToRemove.id)

    if (existingCartItem) {
        return cartItems.filter((item) => {
            if (item.id !== productToRemove.id) {
                return item
            }
        })
    }

    return cartItems
}

const setCartItems = (newCartItems) => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems)
}

// Exported Functions
export const setIsOpen = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_IS_OPEN, boolean)

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return setCartItems(newCartItems)
}

export const decreaseItemInCart = (cartItems, productToDecrease) => {
    const newCartItems = decreaseCartItem(cartItems, productToDecrease)
    return setCartItems(newCartItems)
}

export const removeItemInCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    return setCartItems(newCartItems)
}
