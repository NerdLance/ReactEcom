import Header from './components/layout/Header'
import Categories from './components/categories/Categories'

import { bg1, bg2, bg3, bg4, bg5 } from './images/image-import'


const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Ground Coffee',
      imageUrl: bg1
    },
    {
      id: 2,
      title: 'Whole Bean Coffee',
      imageUrl: bg2
    },
    {
      id: 3,
      title: 'Coffee Apparel',
      imageUrl: bg3
    },
    {
      id: 4,
      title: 'Coffee Mugs',
      imageUrl: bg4
    },
    {
      id: 5,
      title: 'Coffee Accessories',
      imageUrl: bg5
    }
  ]

  return (
    <div>
      <Header />
      <Categories categories={categories} />
    </div>
  );
}

export default App;
