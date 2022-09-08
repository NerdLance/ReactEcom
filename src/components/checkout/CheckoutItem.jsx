import { useDispatch, useSelector } from 'react-redux'

import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart, removeItemInCart, decreaseItemInCart } from '../../store/cart/cart.action'

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
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const { name, imageUrl, price, quantity } = item
    
    const image = require(`../../images/products/${imageUrl}`)

    const handleIncrease = () => {
        dispatch(addItemToCart(cartItems, item))
    }

    const handleDecrease = () => {
        dispatch(decreaseItemInCart(cartItems, item))
    }

    const handleRemove = () => {
        dispatch(removeItemInCart(cartItems, item))
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