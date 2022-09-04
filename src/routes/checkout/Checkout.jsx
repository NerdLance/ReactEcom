import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import CheckoutItem from '../../components/checkout/CheckoutItem'

import './checkout.styles.scss'

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext)

    return (
        <div className='checkout-container'>
            <h2>Checkout Page</h2>
            <div className='checkout-header'>
                <div className='checkout-header-block'>
                    <span>Product</span>
                </div>
                <div className='checkout-header-block'>
                    <span>Description</span>
                </div>
                <div className='checkout-header-block'>
                    <span>Quantity</span>
                </div>
                <div className='checkout-header-block'>
                    <span>Price</span>
                </div>
                <div className='checkout-header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item => <CheckoutItem key={item.id} item={item} />)
            }
            <span className='checkout-total'>Total Price: ${cartTotal}</span>
        </div>
    )
}

export default Checkout