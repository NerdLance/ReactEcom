import { AuthenticationContainer } from './authenticate.styles.jsx'

import SignupForm from '../../components/signup/SignupForm'
import SigninForm from '../../components/signin/SigninForm'

const Authenticate = () => {
    return (
        <div>
            <AuthenticationContainer>
                <SigninForm />
                <SignupForm />
            </AuthenticationContainer>
        </div>
    )
}

export default Authenticate