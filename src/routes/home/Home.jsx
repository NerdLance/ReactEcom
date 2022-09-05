import { Outlet } from 'react-router-dom'

import Directories from '../../components/directories/Directories'

import { bg1, bg2, bg3, bg4, bg5 } from '../../images/image-import'

const Home = () => {
  const directories = [
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
        <Directories directories={directories} />
    </div>
  );
}

export default Home;
