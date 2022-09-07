import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { selectCategoriesMap } from '../../store/categories/category.selector'

import ProductCard from '../../components/product-card/ProductCard'
import Button from '../../components/button/Button'

import {
    ShopCategoryTitle,
    ShopCategoryContainer,
    ShopCategoryBackButtonContainer
} from './shopcategory.styles.jsx'

const ShopCategory = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    const { category } = useParams()
    const [products, setProducts] = useState(categoriesMap[category])
    
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    
    return (
        <>
            <ShopCategoryTitle>{category.toUpperCase()}</ShopCategoryTitle>
            <ShopCategoryContainer>
                    { products &&
                        products.map(product => {
                            return (
                                <ProductCard key={product.id} product={product} />
                            )
                        })
                    }
            </ShopCategoryContainer>
            <ShopCategoryBackButtonContainer>
                <Link to='..'>
                    <Button>BACK TO SHOP</Button>
                </Link>
            </ShopCategoryBackButtonContainer>
        </>
    )
}

export default ShopCategory