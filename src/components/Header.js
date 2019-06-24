import React from 'react'
import {Link} from 'gatsby'

// [matt]: Create a Logo, a login/logout button, Links SendAText
const Header = () => {
    return (
        <div>    
            <div>This is the header</div>
            <Link to="/login">Login</Link><br />
            <Link to="/sendAText">Send a Text</Link>
        </div>
    )
}

export default Header