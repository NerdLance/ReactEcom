import './cartitem.styles.scss'

const CartItem = ({cartItem}) => {
    const { name, quantity} = cartItem
    return (
        <div>
            <div>
                <h3 className='name'>{name}</h3>
                <span>x {quantity}</span>
            </div>
        </div>
    )
}

export default CartItem