import { useParams, useNavigate, Link } from 'react-router-dom'

import { useContext, useState, useEffect } from 'react'
import { CategoriesContext } from '../../contexts/CategoriesContext'

import ProductCard from '../../components/product-card/ProductCard'
import Button from '../../components/button/Button'

import './shopcategory.styles.scss'

const ShopCategory = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    const { category } = useParams()
    const [products, setProducts] = useState(categoriesMap[category])
    const navigate = useNavigate()
    
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    
    return (
        <>
            <h2 className='shop-category-title'>{category.toUpperCase()}</h2>
            <div className='shop-category-container'>
                    { products &&
                        products.map(product => {
                            return (
                                <ProductCard key={product.id} product={product} />
                            )
                        })
                    }
            </div>
            <div className='shop-category-back-button-container'>
                <Link to='..'>
                    <Button>BACK TO SHOP</Button>
                </Link>
            </div>
        </>
    )
}

export default ShopCategory