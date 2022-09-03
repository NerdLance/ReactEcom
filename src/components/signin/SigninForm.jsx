import { useState } from 'react'

import Button from '../button/Button'
import FormInput from '../form-input/FormInput'

import { 
    signInUserWithEmailAndPassword,
    signInWithGooglePopup,
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils'

import './signinform.styles.scss'

const formFieldsDefault = {
    email: '',
    password: ''
}

const SigninForm = () => {
    const [formFields, setFormFields] = useState(formFieldsDefault)
    const { email, password } = formFields

    const resetFormFields = () => setFormFields(formFieldsDefault)

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await signInUserWithEmailAndPassword(email, password)
            console.log(response)
            resetFormFields()
        } catch (error) {
            console.log('Error', error)
            if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                alert('No Account Found with those Credentials')
            }
        }
    }
    
    return (
        <div className='sign-in-container'>
            <h2>Have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Email' 
                    type='email' 
                    required 
                    onChange={handleChange} 
                    value={email} 
                    name='email' 
                />
                <FormInput 
                    label='Password' 
                    type='password' 
                    required 
                    onChange={handleChange} 
                    value={password} 
                    name='password'
                />
                <div className='sign-in-buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SigninForm
