import React from "react"
import Header from '../components/Header'
import {Link} from 'gatsby'

export default () => {
    return (<div>
        <Header />
        <Link to="/sendAText">Send a Text</Link>
        <Link to="/login">Login</Link>
        <div>Hello world</div>
    </div>)
}