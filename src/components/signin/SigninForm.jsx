import { useState } from 'react'

import Button, {BUTTON_TYPE_CLASSES} from '../button/Button'
import FormInput from '../form-input/FormInput'

import { 
    signInUserWithEmailAndPassword,
    signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils'

import {
    SigninContainer,
    SigninButtonsContainer
} from './signinform.styles.jsx'

const formFieldsDefault = {
    email: '',
    password: ''
}

const SigninForm = () => {
    const [formFields, setFormFields] = useState(formFieldsDefault)
    const { email, password } = formFields

    const resetFormFields = () => setFormFields(formFieldsDefault)

    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
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
            const { user } = await signInUserWithEmailAndPassword(email, password)
            resetFormFields()
        } catch (error) {
            console.log('Error', error)
            if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                alert('No Account Found with those Credentials')
            }
        }
    }
    
    return (
        <SigninContainer>
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
                <SigninButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </SigninButtonsContainer>
            </form>
        </SigninContainer>
    )
}

export default SigninForm
