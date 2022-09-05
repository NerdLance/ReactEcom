import { useContext } from 'react'
import { CategoriesContext } from '../../contexts/CategoriesContext'

import { Link } from 'react-router-dom'

import ProductCard from '../product-card/ProductCard'

import {
    CategoryPreviewContainer,
    CategoryPreviewTitle,
    CategoryPreviewGrid
} from './categorypreview.styles.jsx'

const CategoryPreview = ({ title, products }) => {

    return (
        <CategoryPreviewContainer>
            <h2>
                <Link to={title}>
                    <CategoryPreviewTitle>{title.toUpperCase()}</CategoryPreviewTitle>
                </Link>
            </h2>
            <CategoryPreviewGrid>
                {
                    products.filter((_, index) => index < 4).map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} />
                        )
                    })
                }
            </CategoryPreviewGrid>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview