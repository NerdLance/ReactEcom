import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const NavigationContainer = styled.nav`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`

export const NavigationLogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 15px;
`

export const NavigationLinksContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const NavigationLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`