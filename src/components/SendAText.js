import React from 'react'
import phone from 'phone'
import Form from '../styles/Form'
import { navigate } from "gatsby"
import {endpoint} from '../../config'

// [matt]: Example Post to Server
// {
// 	"toPhoneNumbers": ["19415876572", "19415876572"],
// 	"message": "This is a test"
// }

// How do we want the user to put in the numbers? Space Delimited
// Validate that toPhoneNumbers is an array of VALID phone numbers
// DONE Message is not empty
// After it's sent, remove the form and show a confirmation page with all the phone numbers and the message
class SendAText extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            toPhoneNumbers: '',
            phoneNumberArray: [],
            badPhoneNumberArray: [],
            message: '',
            formErrors: {
                toPhoneNumbers: '',
                phoneNumberArray: '',
                message: '',
            },
            phoneNumberValid: false,
            messageValid: false,
            formValid: false,
            formSubmitted: false
        }

        this.validateForm = this.validateForm.bind(this)
        this.validatePhone = this.validatePhone.bind(this)
        this.validateField = this.validateField.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.errorClass = this.errorClass.bind(this)
        this.submitTextInformation = this.submitTextInformation.bind(this)
    }

    validateForm() {
        this.setState({
            formValid:
                this.state.phoneNumberValid &&
                this.state.messageValid,
        })
    }

    validatePhone() {
        const goodPhoneNumberArray = []
        const badPhoneNumberArray = []
        const toPhoneNumbers = this.state.toPhoneNumbers

        if (!toPhoneNumbers) {
            return false
        }

        const phoneNumbersSplit = toPhoneNumbers.split(' ')

        phoneNumbersSplit.forEach(phoneNumber => {
            const cleanedPhoneNumber = phone(phoneNumber, 'USA')

            if (cleanedPhoneNumber.length > 0) {
                goodPhoneNumberArray.push(cleanedPhoneNumber[0])
            } else {
                badPhoneNumberArray.push(phoneNumber)
            }
        })

        this.setState(
            {
                goodPhoneNumberArray,
                badPhoneNumberArray
            }
        )
    }

    validateField(fieldName, fieldValue) {
        let fieldValidationErrors = this.state.formErrors
        let phoneNumberValid = this.state.phoneNumberValid
        let messageValid = this.state.messageValid

        switch (fieldName) {
            case 'message':
                messageValid = !!fieldValue
                fieldValidationErrors.message = messageValid
                    ? ''
                    : ' is invalid'
                break
            case 'toPhoneNumbers':
                phoneNumberValid = !!fieldValue
                fieldValidationErrors.toPhoneNumbers = phoneNumberValid
                    ? ''
                    : ' is invalid'
                break
            default:
                break
        }

        this.setState(
            {
                formErrors: fieldValidationErrors,
                phoneNumberValid,
                messageValid,
            },
            this.validateForm
        )
    }

    handleChange(e) {
        const { name, value } = e.target

        this.setState(
            {
                [name]: value,
            },
            () => {
                this.validateField(name, value)
            }
        )
    }

    submitTextInformation() {
        const sendATextInformation = {
            message: this.state.message,
            toPhoneNumbers: this.state.goodPhoneNumberArray,
        }

        const authToken = JSON.parse(localStorage.getItem('user')).token
        // [matt]: Need auth headers to be attached
        console.log('[matt] ', JSON.stringify(sendATextInformation))
        

        return fetch(`${endpoint}/sendSMS`, {
            method: 'POST', 
            headers: { 
                'Authorization': `Bearer ${authToken}`
            },
            body: JSON.stringify(sendATextInformation)
        })
        .then(response => {
            console.log('[matt] response', response.json())
        })
        .catch(err => {
            // [matt]: TODO If Err, should not go to follow up confirmation page
            console.log('[matt] err', err)
            
        })
    }

    async handleSubmit(e) {
        e.preventDefault()
        if (!this.state.formValid) {
            return false
        }
        await this.validatePhone()
        await this.submitTextInformation()

        this.setState({formSubmitted: true})

        navigate(
            `/sendATextConfirmation`, 
            {
                state: {
                    goodPhoneNumberArray: this.state.goodPhoneNumberArray,
                    badPhoneNumberArray: this.state.badPhoneNumberArray,
                    message: this.state.message
                }
            }
        )
        
    }

    errorClass(error) {
        return error.length === 0 ? 'no-error' : 'has-error'
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <h1>Send A Mass Text</h1>
                    <p>If adding more than one phone number, use spaces in between the numbers</p>
                    <label htmlFor="toPhoneNumber">Phone Number(s): </label>
                    <input
                        type="tel" // [matt]: CHANGE to something else
                        id="toPhoneNumbers"
                        name="toPhoneNumbers"
                        value={this.state.toPhoneNumbers}
                        onChange={this.handleChange}
                        className={`${this.errorClass(
                            this.state.formErrors.toPhoneNumbers
                        )}`}
                    />
                    <label htmlFor="message">Message: </label>
                    <textarea
                        type="textarea"
                        id="message"
                        name="message"
                        value={this.state.message}
                        onChange={this.handleChange}
                        className={`${this.errorClass(
                            this.state.formErrors.message
                        )}`}
                    >
                    </textarea>
                    <button type="submit">Send the Text!</button>
                </Form>
            </div>
        )
    }

}

export default SendAText