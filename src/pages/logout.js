import React from "react"
import Header from '../components/Header'
import {navigate} from 'gatsby'
import {userService, isLoggedIn} from '../_services/userServices'

export default () => {
    if(isLoggedIn) {
        userService.logout()
    }
    navigate('/')
    
    return (<div>
        <Header />
        <div>Hello world</div>
    </div>)
}