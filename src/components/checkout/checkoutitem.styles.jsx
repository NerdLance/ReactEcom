import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;

`

export const CheckoutImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`

export const CheckoutItemName = styled.span`
    width: 23%;
`

export const CheckoutItemPrice = styled.span`
width: 23%;
`

export const CheckoutItemQuantity = styled.span`
    display: flex;
    width: 23%;
`

export const CheckoutItemQuantityArrow = styled.div`
    cursor: pointer;
`

export const CheckoutItemQuantityValue = styled.span`
    margin: 0 10px;
`

export const CheckoutItemRemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`

/*
.checkout-item-container {
  
    .checkout-image-container {
    }
    .checkout-item-name,
    .checkout-item-quantity,
    .checkout-item-price {
        width: 23%;
    }
  
    .checkout-item-quantity {
        display: flex;
    
        .arrow {
            cursor: pointer;
        }
    
        .value {
            margin: 0 10px;
        }
    }
  
    .remove-button {
        padding-left: 12px;
        cursor: pointer;
    }
}
*/