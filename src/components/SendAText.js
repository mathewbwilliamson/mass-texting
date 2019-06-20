import React from 'react'
import Form from '../styles/Form'

const SendAText = () => {
    return (
        <div>
            <Form>
                <label for="toPhoneNumber">Phone Number: </label>
                <input type="tel" id="toPhoneNumber"></input>
                <label for="message">Message: </label>
                <textarea type="textarea" id="message"></textarea>
                <button type="submit">Send the Text!</button>
            </Form>
        </div>
    )
}

export default SendAText