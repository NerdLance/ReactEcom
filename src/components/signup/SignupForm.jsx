import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import Button from '../button/Button'
import FormInput from '../form-input/FormInput'

import {
    SignupContainer
} from './signupform.styles.jsx'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignupForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        //Password matches
        // See if we've auth with user and pass
        //Create user doc from return value
        const errors = []
        if (password !== confirmPassword) {
            errors.push('Passwords Do Not Match')
        }

        if (errors.length === 0) {
            try {
                const { user } = await createAuthUserWithEmailAndPassword(email, password)
                await createUserDocumentFromAuth(user, { displayName })
                resetFormFields()
            } catch (error) {
                if (error.code === 'auth/email-already-in-use') {
                    alert('Cannot Create User. Email Already in Use.')
                }
                console.log(error)
            }
        } else {
            console.log(errors)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormFields({
            ...formFields,
            [name]: value
        })
    }

    return (
        <SignupContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName} />
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />
                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />
                <FormInput label='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                <Button type='submit'>Sign Up</Button>
            </form>
        </SignupContainer>
    )
}

export default SignupForm