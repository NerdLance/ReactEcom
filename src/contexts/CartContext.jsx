import { createContext, useState, useEffect } from 'react'

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

export const CartProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
        setCartTotal(newCartTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        setCartItems(newCartItems)
    }

    const decreaseItemInCart = (productToDecrease) => {
        const newCartItems = decreaseCartItem(cartItems, productToDecrease)
        setCartItems(newCartItems)
        console.log('Decreasing Item', newCartItems)
    }

    const removeItemInCart = (productToRemove) => {
        const newCartItems = removeCartItem(cartItems, productToRemove)
        setCartItems(newCartItems)
        console.log('Removing Item', newCartItems)
    }
    // console.log('items', cartItems, 'quantity', totalQuantity)

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

    useEffect(() => {

    }, [])

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}