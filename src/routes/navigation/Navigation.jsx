import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ReactComponent as CoffeeLogo } from '../../images/branding/coffee-svg-icon.svg'
import { CartContext } from '../../contexts/CartContext'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { selectCurrentUser } from '../../store/user/user.selector'

import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'

import {
    NavigationContainer,
    NavigationLogoContainer,
    NavigationLinksContainer,
    NavigationLink
} from './navigation.styles.jsx'

const Navigation = () => {
    // const { currentUser } = useContext(UserContext)
    const currentUser = useSelector(selectCurrentUser)
    const { isOpen } = useContext(CartContext)

    return (
        <>
            <NavigationContainer>
                <NavigationLogoContainer to='/'>
                    <CoffeeLogo className='coffee-logo' />
                </NavigationLogoContainer>
                <NavigationLinksContainer>
                    <NavigationLink className='navigation-link' to='/shop'>
                        SHOP
                    </NavigationLink>
                    {
                        currentUser ? (
                            <NavigationLink as='span' onClick={signOutUser}>LOGOUT</NavigationLink>
                        ) : (
                            <NavigationLink to='/auth'>
                                LOGIN
                            </NavigationLink>
                        )
                    }
                    <CartIcon/>
                </NavigationLinksContainer>
                {
                    isOpen && <CartDropdown />
                }
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation