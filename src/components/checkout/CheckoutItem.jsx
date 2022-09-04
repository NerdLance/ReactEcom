import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import './checkoutitem.styles.scss'

const CheckoutItem = ({item}) => {
    const { addItemToCart, decreaseItemInCart, removeItemInCart } = useContext(CartContext)
    const { name, imageUrl, price, quantity } = item
    
    const image = require(`../../images/products/${imageUrl}`)

    const handleIncrease = () => {
        addItemToCart(item)
    }

    const handleDecrease = () => {
        decreaseItemInCart(item)
    }

    const handleRemove = () => {
        removeItemInCart(item)
    }

    return (
        <div className='checkout-item-container'>
            <div className='checkout-image-container'>
                <img src={image} alt={name}/>
            </div>
            <span className='checkout-item-name'>{name}</span>
            <span className='checkout-item-quantity'>
                <div className='arrow' onClick={handleDecrease}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={handleIncrease}>
                    &#10095;
                </div>
            </span>
            <span className='checkout-item-price'>{price}</span>
            <div className='remove-button' onClick={handleRemove}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem