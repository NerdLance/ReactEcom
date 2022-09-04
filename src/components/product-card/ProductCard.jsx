import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import './productcard.styles.scss'

import Button from '../button/Button'

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product
    const { addItemToCart } = useContext(CartContext)

    console.log(imageUrl)
    //const image = (imageUrl.includes('https')) ? imageUrl : require(`../../images/products/${imageUrl}`)
    const image = require(`../../images/products/${imageUrl}`)
    
    const handleClick = () => {
        addItemToCart(product)
    }

    return (
        <div className='product-card-container'>
            <img src={image} alt={name} />
            <div className='product-card-footer'>
                <span className='product-name'>{name}</span>
                <span className='product-price'>{price}</span>
            </div>
            <Button onClick={handleClick} buttonType='inverted'>Add to Cart</Button>
        </div>
    )
}

export default ProductCard