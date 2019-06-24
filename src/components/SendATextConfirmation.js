import React from 'react'

// [matt]: Need to do all formatting and CSS
const SendATextConfirmation = (props) => {
    const badPhoneNumberArray = props.passedInState.badPhoneNumberArray
    const goodPhoneNumberArray = props.passedInState.goodPhoneNumberArray
    const message = props.passedInState.message

    return (
        <div>
            <h1>Text Was Sent</h1>
            <div>
                The following phone numbers recieved a text message:
                <ul>
                    {goodPhoneNumberArray.map((phoneNumber, idx) => <li key={idx}>{phoneNumber}</li>)}
                </ul>
            </div>
            <div>
                The message sent was:
                <div>{message}</div>
            </div>
            {badPhoneNumberArray.length > 0 && <div>
                Error! The following phone numbers were pasted in but they were not used for sending any messages.
                <ul>
                    {badPhoneNumberArray.map((phoneNumber, idx) => <li key={idx}>{phoneNumber}</li>)}
                </ul>
            </div>}
        </div>
    )
}

export default SendATextConfirmation