import './categories.styles.scss'

const Category = ({category}) => {
    const { title, imageUrl } = category
    console.log(imageUrl)
    return (
        <div className='category-container'>
            {/* <img /> */}
            <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`}}></div>
            <div className='category-body-container'>
                <h3>{title}</h3>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default Category