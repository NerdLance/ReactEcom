import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setIsOpen } from '../../store/cart/cart.action.js'
import { selectCartIsOpen, selectCartCount } from '../../store/cart/cart.selector.js'
import {
    ShoppingIcon,
    CartIconContainer,
    CartItemCount
} from './carticon.styles.jsx'


const CartIcon = () => {
    const dispatch = useDispatch()
    const cartCount = useSelector(selectCartCount)
    const isOpen = useSelector(selectCartIsOpen)

    console.log('isOpen', isOpen)
    const cartToggle = () => dispatch(setIsOpen(!isOpen))

    return (
        <CartIconContainer onClick={cartToggle}>
            <ShoppingIcon />
            <CartItemCount>{cartCount}</CartItemCount>
        </CartIconContainer>
    )
}

export default CartIcon