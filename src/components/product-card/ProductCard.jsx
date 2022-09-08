import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

import {
    ProductCardContainer,
    ProductCardFooter,
    ProductCardName,
    ProductCardPrice
} from './productcard.styles.jsx'

import Button, {BUTTON_TYPE_CLASSES} from '../button/Button'

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const { name, price, imageUrl } = product

    const image = require(`../../images/products/${imageUrl}`)
    
    const handleClick = () => {
        dispatch(addItemToCart(cartItems, product))
    }

    return (
        <ProductCardContainer>
            <img src={image} alt={name} />
            <ProductCardFooter>
                <ProductCardName>{name}</ProductCardName>
                <ProductCardPrice>{price}</ProductCardPrice>
            </ProductCardFooter>
            <Button onClick={handleClick} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to Cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard