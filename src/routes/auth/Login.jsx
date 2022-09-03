import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils'

import Button from '../../components/button/Button'
import SignupForm from '../../components/signup/SignupForm'

const Login = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <div>Login Page!</div>
            <Button buttonType='google' onClick={logGoogleUser}>Sign in With Google Popup</Button>
            <SignupForm />
        </div>
    )
}

export default Login