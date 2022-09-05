import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/Home'
import Navigation from './routes/navigation/Navigation'
import Authenticate from './routes/auth/Authenticate'
import Shop from './routes/shop/Shop'
import Checkout from './routes/checkout/Checkout'
import ShopCategory from './routes/shop-category/ShopCategory'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='auth' element={<Authenticate />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
      <Route path='/shop' element={<Navigation />}>
        <Route index element={<Shop />} />
        <Route path=':category' element={<ShopCategory />} />
      </Route>
    </Routes>
  );
}

export default App;
