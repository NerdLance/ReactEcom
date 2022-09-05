import styled from 'styled-components'

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const CategoryPreviewTitle = styled.span`
    font-size: 1.4em;
    margin-bottom: 25px;
    cursor: pointer;
    font-weight: 300;
`

export const CategoryPreviewGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 20px;
    row-gap: 30px;
    
    @media only screen and (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr)
    }

    @media only screen and (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
`
/*
.category-preview-container {
  
    .title {
    }
  
    .preview {
    }
}

@media only screen and (min-width: 576px) {
    .category-preview-container {

        .preview {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}

@media only screen and (min-width: 992px) {
    .category-preview-container {

        .preview {
            grid-template-columns: repeat(3, 1fr)
        }
    }
}

@media only screen and (min-width: 1200px) {
    .category-preview-container {

        .preview {
            grid-template-columns: repeat(4, 1fr);
        }
    }
}
*/