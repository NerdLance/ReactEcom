import {
    DirectoryContainer,
    DirectoryBackgroundImage,
    DirectoryBody
} from './directory.styles.jsx'

const Directory = ({category}) => {
    const { title, imageUrl } = category
    console.log(imageUrl)
    return (
        <DirectoryContainer>
            <DirectoryBackgroundImage imageUrl={imageUrl} />
            <DirectoryBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </DirectoryBody>
        </DirectoryContainer>
    )
}

export default Directory