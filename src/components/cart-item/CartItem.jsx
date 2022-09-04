import './cartitem.styles.scss'

const CartItem = ({cartItem}) => {
    const { name, quantity, imageUrl, price } = cartItem

    const image = require(`../../images/products/${imageUrl}`)
    return (
        <div className='cart-item-container'>
            <img src={image} alt={name} />
            <div className='cart-item-details'>
                <span className='cart-item-name'>{name}</span>
                <span className='cart-item-price'>
                    {quantity} x {price}
                </span>
            </div>
        </div>
    )
}

export default CartItem