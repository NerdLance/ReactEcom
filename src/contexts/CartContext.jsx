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

export const CartContext = createContext({
    isOpen: false,
    setIsOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
})

export const CartProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        setCartItems(newCartItems)
        console.log('Updated Items', newCartItems)
    }

    const value = { isOpen, setIsOpen, cartItems, addItemToCart }

    useEffect(() => {

    }, [])

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}