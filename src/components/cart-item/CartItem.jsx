import {
    CartItemContainer,
    CartItemDetails,
    CartItemName,
    CartItemPrice,
} from './cartitem.styles.jsx'

const CartItem = ({cartItem}) => {
    const { name, quantity, imageUrl, price } = cartItem

    const image = require(`../../images/products/${imageUrl}`)
    return (
        <CartItemContainer>
            <img src={image} alt={name} />
            <CartItemDetails>
                <CartItemName>{name}</CartItemName>
                <CartItemPrice>
                    {quantity} x ${price}
                </CartItemPrice>
            </CartItemDetails>
        </CartItemContainer>
    )
}

export default CartItem