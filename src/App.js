import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { 
  getCategoriesAndDocuments,
  onAuthStateChangedListener, 
  createUserDocumentFromAuth 
} from './utils/firebase/firebase.utils'

import { setCurrentUser } from './store/user/user.action'
import { setCategories } from './store/categories/category.action'

import Home from './routes/home/Home'
import Navigation from './routes/navigation/Navigation'
import Authenticate from './routes/auth/Authenticate'
import Shop from './routes/shop/Shop'
import Checkout from './routes/checkout/Checkout'
import ShopCategory from './routes/shop-category/ShopCategory'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if (user) {
            createUserDocumentFromAuth(user)
        }
        dispatch(setCurrentUser(user))
    })
    return unsubscribe
  }, [])

  useEffect(() => {
    const getCategoriesMap = async () => {
        const categoriesArray = await getCategoriesAndDocuments()
        dispatch(setCategories(categoriesArray))
    }

    getCategoriesMap()
  }, [])
  
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
