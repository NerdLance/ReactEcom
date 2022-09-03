import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { ReactComponent as CoffeeLogo } from '../../images/branding/coffee-svg-icon.svg'
import { UserContext } from '../../contexts/UserContext'
import { CartContext } from '../../contexts/CartContext'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'

import './navigation.styles.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isOpen } = useContext(CartContext)

    return (
        <>
            <nav className='navigation'>
                <Link className='navigation-logo-container' to='/'>
                    <CoffeeLogo className='coffee-logo' />
                </Link>
                <div className='navigation-links-container'>
                    <Link className='navigation-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className='navigation-link' onClick={signOutUser}>LOGOUT</span>
                        ) : (
                            <Link className='navigation-link' to='/auth'>
                                LOGIN
                            </Link>
                        )
                    }
                    <CartIcon/>
                </div>
                {
                    isOpen && <CartDropdown />
                }
            </nav>
            <Outlet />
        </>
    )
}

export default Navigation