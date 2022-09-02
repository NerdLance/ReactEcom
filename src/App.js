import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/Home'
import Navigation from './routes/navigation/Navigation'
import Login from './routes/auth/Login'

const Shop = () => {
  return (
    <div>I am the Shop Page!</div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
