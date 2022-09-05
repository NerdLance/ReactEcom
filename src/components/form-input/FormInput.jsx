import {
    FormInputLabel,
    InputGroup,
    StyledInput
} from './forminput.styles.jsx'
const FormInput = ({ label, ...otherProps }) => {
    return (
        <InputGroup>
            <StyledInput {...otherProps} />
            { label && (
                <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>
            )}
        </InputGroup>
    )
}

export default FormInput