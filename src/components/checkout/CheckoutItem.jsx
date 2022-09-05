import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import {
    CheckoutItemContainer,
    CheckoutImageContainer,
    CheckoutItemName,
    CheckoutItemPrice,
    CheckoutItemQuantity,
    CheckoutItemQuantityArrow,
    CheckoutItemQuantityValue,
    CheckoutItemRemoveButton
} from './checkoutitem.styles.jsx'

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
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <img src={image} alt={name}/>
            </CheckoutImageContainer>
            <CheckoutItemName>{name}</CheckoutItemName>
            <CheckoutItemQuantity>
                <CheckoutItemQuantityArrow onClick={handleDecrease}>
                    &#10094;
                </CheckoutItemQuantityArrow>
                <CheckoutItemQuantityValue>{quantity}</CheckoutItemQuantityValue>
                <CheckoutItemQuantityArrow onClick={handleIncrease}>
                    &#10095;
                </CheckoutItemQuantityArrow>
            </CheckoutItemQuantity>
            <CheckoutItemPrice>${price}<br />{(quantity > 1) && `($${price * quantity})`}</CheckoutItemPrice>
            <CheckoutItemRemoveButton onClick={handleRemove}>&#10005;</CheckoutItemRemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem