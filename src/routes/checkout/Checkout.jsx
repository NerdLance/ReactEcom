import { useSelector } from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'

import CheckoutItem from '../../components/checkout/CheckoutItem'

import { 
    CheckoutContainer, 
    CheckoutHeader,
    CheckoutHeaderBlock,
    CheckoutTotal
} from './checkout.styles.jsx'

const Checkout = () => {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

    return (
        <CheckoutContainer>
            <h2>Checkout Page</h2>
            <CheckoutHeader>
                <CheckoutHeaderBlock>
                    <span>Product</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Description</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Quantity</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Price</span>
                </CheckoutHeaderBlock>
                <CheckoutHeaderBlock>
                    <span>Remove</span>
                </CheckoutHeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map(item => <CheckoutItem key={item.id} item={item} />)
            }
            <CheckoutTotal>Total Price: ${cartTotal}</CheckoutTotal>
        </CheckoutContainer>
    )
}

export default Checkout