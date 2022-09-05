import Directory from './Directory'

import { DirectoriesContainer } from './directories.styles.jsx'

const Directories = ({directories}) => {
    return (
        <DirectoriesContainer>
            {
                directories.map((directory) => {
                    return <Directory key={directory.id} category={directory} />
                })
            }
        </DirectoriesContainer>
    )
}

export default Directories