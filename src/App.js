import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/Home'
import Navigation from './routes/navigation/Navigation'
import Authenticate from './routes/auth/Authenticate'
import Shop from './routes/shop/Shop'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/auth' element={<Authenticate />} />
      </Route>
    </Routes>
  );
}

export default App;
