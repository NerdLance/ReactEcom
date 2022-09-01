import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as CoffeeLogo } from '../../images/branding/coffee-svg-icon.svg'

import './navigation.styles.scss'

const Navigation = () => {
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
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navigation