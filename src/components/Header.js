import React from 'react'
import {Link} from 'gatsby'
import HeaderStyles from '../styles/HeaderStyles'
import {getUserData} from '../_services/userServices'

const Header = () => {
    const user = getUserData()

    return (
        <HeaderStyles>    
            {!user && <Link to="/login">Login</Link>}
            {user && <Link to="/logout">Logout</Link>}
            <Link to="/sendAText">Send a Text</Link>
        </HeaderStyles>
    )
}

export default Header