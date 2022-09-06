import { useNavigate } from 'react-router-dom'

import {
    DirectoryContainer,
    DirectoryBackgroundImage,
    DirectoryBody
} from './directory.styles.jsx'

const Directory = ({directory}) => {
    const { title, imageUrl, route } = directory
    const navigate = useNavigate()
    
    const onNavigateHandler = () => navigate(route)
    return (
        <DirectoryContainer onClick={onNavigateHandler}>
            <DirectoryBackgroundImage imageUrl={imageUrl} />
            <DirectoryBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </DirectoryBody>
        </DirectoryContainer>
    )
}

export default Directory