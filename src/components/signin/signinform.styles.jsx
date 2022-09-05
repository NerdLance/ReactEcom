import styled from 'styled-components'

export const SigninContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;
    }

    @media only screen and (max-width: 900px) {
        flex-basis: 100%;
        padding: 0 16px;
    }
`

export const SigninButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`