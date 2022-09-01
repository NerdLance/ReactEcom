import Category from './Category'

const Categories = ({categories}) => {
    return (
        <div className='categories-container'>
            {
                categories.map((category) => {
                    return <Category key={category.id} category={category} />
                })
            }
        </div>
    )
}

export default Categories