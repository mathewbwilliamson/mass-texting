import React from "react"
import Header from '../components/Header'
import SendATextConfirmation from '../components/SendATextConfirmation'
import BasicPageStyles from '../styles/BasicPageStyles'
import PleaseLogIn from '../components/PleaseLogIn'

export default (props) => {
    return (
        <BasicPageStyles>
            <PleaseLogIn>
                <Header />
                <div className="container">
                    <SendATextConfirmation passedInState={props.location.state} />
                </div>
            </PleaseLogIn>
        </BasicPageStyles>
    )
}