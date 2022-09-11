import { useSelector } from 'react-redux'

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector'
import CategoryPreview from '../../components/category-preview/CategoryPreview'
import Spinner from '../../components/spinner/Spinner'

const Shop = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    return (
        <div>
        {
            isLoading ? (
                <Spinner />
            ) : (
                Object.keys(categoriesMap).map((title, index) => {
                    const products = categoriesMap[title]
                    return (
                        <CategoryPreview key={index} title={title} products={products} />
                    )
                })
            )
        }
        </div>
    )
}

export default Shop