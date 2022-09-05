import styled from 'styled-components'

export const ShopCategoryContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 10px;
    row-gap: 50px;
    
    @media only screen and (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr)
    }

    @media only screen and (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
`

export const ShopCategoryTitle = styled.h2`
    font-size: 2.4em;
    text-align: center;
    margin-bottom: 1em;
    font-weight: 300;
`

export const ShopCategoryBackButtonContainer = styled.div`
    margin-top: 2em;
`

/*
.shop-category-container {
}

.shop-category-title {
}

.shop-category-back-button-container {
}
*/