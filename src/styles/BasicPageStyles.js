import styled from 'styled-components'

const BasicPageStyles = styled.div`
    .container {
        margin: 0 auto;
        padding: 2rem;
        border: 2px solid ${props => props.theme.background};
        border-radius: 4px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.13);
        z-index: 2;
        position: relative;
        background-color: ${props => props.theme.surface};
        margin-bottom: 20px;
    }
`

export default BasicPageStyles
