import { Outlet } from 'react-router-dom'

import Categories from '../../components/categories/Categories'

import { bg1, bg2, bg3, bg4, bg5 } from '../../images/image-import'

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Ground Coffee',
      imageUrl: bg1
    },
    {
      id: 2,
      title: 'Whole Beans',
      imageUrl: bg2
    },
    {
      id: 3,
      title: 'Apparel',
      imageUrl: bg3
    },
    {
      id: 4,
      title: 'Mugs',
      imageUrl: bg4
    },
    {
      id: 5,
      title: 'Accessories',
      imageUrl: bg5
    }
  ]

  return (
    <div>
        <Outlet />
        <Categories categories={categories} />
    </div>
  );
}

export default Home;
