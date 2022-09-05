import styled from 'styled-components'

export const DirectoriesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media only screen and (max-width: 900px) {
        display: grid;
        grid-template-columns: 1fr;
    }
`

/*
.categories-container {
}

@media only screen and (max-width: 900px) {
    .categories-container {
    }
}
*/