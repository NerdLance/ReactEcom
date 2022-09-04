import { useContext, Fragment } from 'react'

import { CategoriesContext } from '../../contexts/CategoriesContext'
import ProductCard from '../../components/product-card/ProductCard'

import './shop.styles.scss'

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext)
    return (
        <>
        {
            Object.keys(categoriesMap).map((title, index) => {
                return (
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <div key={title} className='products-container'>
                            {
                                categoriesMap[title].map((product) => {
                                    return (
                                        <ProductCard product={product} key={product.id} />
                                        )
                                    })
                                }
                        </div>
                    </Fragment>
                )
            })
        }
            <div className='products-container'>
                {/*             
                {products.map(product => {
                    return <ProductCard product={product} key={product.id} />
                })}
            */}
            </div>
        </>
    )
}

export default Shop