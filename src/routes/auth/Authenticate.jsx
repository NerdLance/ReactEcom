import './authenticate.styles.scss'

import SignupForm from '../../components/signup/SignupForm'
import SigninForm from '../../components/signin/SigninForm'

const Authenticate = () => {
    return (
        <div>
            <div className='authentication-container'>
                <SigninForm />
                <SignupForm />
            </div>
        </div>
    )
}

export default Authenticate