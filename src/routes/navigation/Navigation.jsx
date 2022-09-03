import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { ReactComponent as CoffeeLogo } from '../../images/branding/coffee-svg-icon.svg'
import { UserContext } from '../../contexts/UserContext'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext)

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
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navigation