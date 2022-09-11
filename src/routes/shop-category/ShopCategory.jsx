import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector'

import ProductCard from '../../components/product-card/ProductCard'
import Button from '../../components/button/Button'
import Spinner from '../../components/spinner/Spinner'

import {
    ShopCategoryTitle,
    ShopCategoryContainer,
    ShopCategoryBackButtonContainer
} from './shopcategory.styles.jsx'

const ShopCategory = () => {
    const { category } = useParams()
    console.log('render/re-rendering category component')
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category])
    
    useEffect(() => {
        console.log('effect fired. calling set products')
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    
    return (
        <>
            <ShopCategoryTitle>{category.toUpperCase()}</ShopCategoryTitle>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    <ShopCategoryContainer>
                            { products &&
                                products.map(product => {
                                    return (
                                        <ProductCard key={product.id} product={product} />
                                    )
                                })
                            }
                    </ShopCategoryContainer>
                )
            }
            <ShopCategoryBackButtonContainer>
                <Link to='..'>
                    <Button>BACK TO SHOP</Button>
                </Link>
            </ShopCategoryBackButtonContainer>
        </>
    )
}

export default ShopCategory