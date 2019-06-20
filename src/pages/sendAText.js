import React from "react"
import Header from '../components/Header'
import SendAText from '../components/SendAText'
import BasicPageStyles from '../styles/BasicPageStyles'

export default () => {
    return (
        <BasicPageStyles>
            <Header />
            <div className="container">
                <SendAText />

            </div>
        </BasicPageStyles>
    )
}