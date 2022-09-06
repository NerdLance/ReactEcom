import Directory from './Directory'

import { bg1, bg2, bg3, bg4, bg5 } from '../../images/image-import'

import { DirectoriesContainer } from './directories.styles.jsx'

const directories = [
    {
        id: 1,
        title: 'Ground Coffee',
        imageUrl: bg1,
        route: 'shop/ground_coffee'
    },
    {
        id: 2,
        title: 'Whole Beans',
        imageUrl: bg2,
        route: 'shop/whole_beans'
    },
    {
        id: 3,
        title: 'Apparel',
        imageUrl: bg3,
        route: 'shop/apparel'
    },
    {
        id: 4,
        title: 'Mugs',
        imageUrl: bg4,
        route: 'shop/mugs'
    },
    {
        id: 5,
        title: 'Accessories',
        imageUrl: bg5,
        route: 'shop/accessories'
    }
]

const Directories = () => {
    return (
        <DirectoriesContainer>
            {
                directories.map((directory) => {
                    return <Directory key={directory.id} directory={directory} />
                })
            }
        </DirectoriesContainer>
    )
}

export default Directories