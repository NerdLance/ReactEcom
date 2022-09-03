import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../images/branding/shopping-bag.svg'
import './carticon.styles.scss'

import { CartContext } from '../../contexts/CartContext'

const CartIcon = () => {
    const { isOpen, setIsOpen } = useContext(CartContext)

    const cartToggle = () => {
        console.log('Toggle Cart')
        setIsOpen(!isOpen)
    }

    return (
        <div className='cart-icon-container' onClick={cartToggle}>
            <ShoppingIcon className='cart-icon-svg'/>
            <span className='cart-item-count'>10</span>
        </div>
    )
}

export default CartIcon