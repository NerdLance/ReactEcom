import { useContext, Fragment } from 'react'

import { CategoriesContext } from '../../contexts/CategoriesContext'
import CategoryPreview from '../../components/category-preview/CategoryPreview'

import './shop.styles.scss'

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <div className='shop-container'>
        {
            Object.keys(categoriesMap).map((title, index) => {
                const products = categoriesMap[title]
                return (
                    <CategoryPreview key={index} title={title} products={products} />
                )
            })
        }
        </div>
    )
}

export default Shop