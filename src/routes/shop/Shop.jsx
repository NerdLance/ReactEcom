import { useSelector } from 'react-redux'

import { selectCategoriesMap } from '../../store/categories/category.selector'
import CategoryPreview from '../../components/category-preview/CategoryPreview'

const Shop = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    return (
        <div>
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