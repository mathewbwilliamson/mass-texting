import React from "react"
import Header from '../components/Header'
import {navigate} from 'gatsby'
import {logout, isLoggedIn} from '../_services/userServices'

export default () => {
    if(isLoggedIn) {
        logout()
    }
    if (typeof window !== 'undefined') {
        navigate('/')
    }
    
    return (<div>
        <Header />
        <div>Hello world</div>
    </div>)
}