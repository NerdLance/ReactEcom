import { createContext, useReducer } from 'react'

import { createAction } from '../utils/reducer/reducer.utils'

export const CART_ACTION_TYPES = {
    'SET_IS_OPEN': 'SET_IS_OPEN',
    'SET_CART_ITEMS': 'SET_CART_ITEMS'
}

const INITIAL_STATE = {
    isOpen: false,
    cartCount: 0,
    cartTotal: 0,
    cartItems: []
}

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

export const CartContext = createContext({
    isOpen: false,
    setIsOpen: () => {},
    cartCount: 0,
    cartTotal: 0,
    cartItems: [],
    addItemToCart: () => {},
    decreaseItemInCart: () => {},
    removeItemInCart: () => {}
})

const cartReducer = (state, action) => {
    const { type, payload } = action

    switch(type) {
        case CART_ACTION_TYPES.SET_IS_OPEN:
            return {
                ...state,
                isOpen: payload
            }
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        default:
            throw new Error(`Error Unhandled Type: ${type}`)
    }
}

export const CartProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(cartReducer, INITIAL_STATE)
    const { isOpen, cartItems, cartCount, cartTotal } = state
    
    console.log(cartItems)

    const setIsOpen = (isOpenValue) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_OPEN, isOpenValue))
    }

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, item) => total + item.quantity, 0)
        const newCartTotal = newCartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
        const cartPayload = {
            cartCount: newCartCount,
            cartTotal: newCartTotal,
            cartItems: newCartItems
        }
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartPayload))
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemsReducer(newCartItems)
    }

    const decreaseItemInCart = (productToDecrease) => {
        const newCartItems = decreaseCartItem(cartItems, productToDecrease)
        updateCartItemsReducer(newCartItems)
    }

    const removeItemInCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove)
        updateCartItemsReducer(newCartItems)
    }

    const value = { 
        isOpen, 
        setIsOpen, 
        cartItems, 
        addItemToCart, 
        removeItemInCart, 
        decreaseItemInCart, 
        cartCount, 
        cartTotal 
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}