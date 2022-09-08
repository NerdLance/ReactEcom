import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'

import {
    CartDropdownContainer,
    CartDropdownItems,
    EmptyMessage
} from './cartdropdown.styles.jsx'

import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    console.log('Items for Cart', cartItems)
    return (
        <CartDropdownContainer>
            <CartDropdownItems>
                {
                    cartItems.length 
                        ? cartItems.map(item => {
                            return <CartItem key={item.id} cartItem={item} />
                        })
                        : <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartDropdownItems>
            <Link to='/checkout'>
                <Button>GO TO CHECKOUT</Button>
            </Link>
        </CartDropdownContainer>
    )
}

export default CartDropdown