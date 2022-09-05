import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import {
    ProductCardContainer,
    ProductCardFooter,
    ProductCardName,
    ProductCardPrice
} from './productcard.styles.jsx'

import Button, {BUTTON_TYPE_CLASSES} from '../button/Button'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContext)

    const image = require(`../../images/products/${imageUrl}`)
    
    const handleClick = () => {
        addItemToCart(product)
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