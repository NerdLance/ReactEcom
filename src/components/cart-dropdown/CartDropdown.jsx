import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import './cartdropdown.styles.scss'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    console.log('Items for Cart', cartItems)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-dropdown-items'>
                {
                    cartItems.map(item => {
                        return <CartItem key={item.id} cartItem={item} />
                    })
                }
            </div>
            <Link to='/checkout'>
                <Button>GO TO CHECKOUT</Button>
            </Link>
        </div>
    )
}

export default CartDropdown