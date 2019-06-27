import styled from 'styled-components'

const HeaderStyles = styled.div`
    display: flex;
    justify-content: flex-end;

    a {
        padding: 1rem 3rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 1em;
        background: none;
        border: 0;
        cursor: pointer;
        text-decoration: none;
        border: 2px solid black;
        display: block;
        width: 10vw;
        text-align: center;
        margin: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default HeaderStyles
