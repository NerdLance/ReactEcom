import { useContext } from 'react'
import {
    ShoppingIcon,
    CartIconContainer,
    CartItemCount
} from './carticon.styles.jsx'

import { CartContext } from '../../contexts/CartContext'

const CartIcon = () => {
    const { isOpen, setIsOpen, cartCount } = useContext(CartContext)

    const cartToggle = () => {
        console.log('Toggle Cart')
        setIsOpen(!isOpen)
    }

    return (
        <CartIconContainer onClick={cartToggle}>
            <ShoppingIcon />
            <CartItemCount>{cartCount}</CartItemCount>
        </CartIconContainer>
    )
}

export default CartIcon