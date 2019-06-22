import React from "react"
import Header from '../components/Header'
import SendAText from '../components/SendAText'
import BasicPageStyles from '../styles/BasicPageStyles'
import PleaseLogIn from '../components/PleaseLogIn'

export default () => {
    return (
        <BasicPageStyles>
            <PleaseLogIn>
                <Header />
                <div className="container">
                    <SendAText />
                </div>
            </PleaseLogIn>
        </BasicPageStyles>
    )
}