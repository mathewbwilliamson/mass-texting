import React from 'react'
import axios from 'axios'
import Form from '../styles/Form'
// import Error from './ErrorMessage'
import {endpoint} from '../../config'

class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
        this.saveToState = this.saveToState.bind(this)
    }

    saveToState(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
        return null
    }

    render() {
        return (
            <Form
                method="POST"
                onSubmit={async e => {
                    e.preventDefault()
                    axios.post(`${endpoint}/users/authenticate`, {
                        username: this.state.email,
                        password: this.state.password
                    })
                    .then(res => {
                        console.log('[matt] res', res.data.token)
                        
                        this.setState({
                            email: '',
                            password: '',
                        })
                    })
                    .catch(err => console.log('err', err)
                    )
                }}
            >
                <fieldset 
                    // disabled={loading} aria-busy={loading}
                >
                    <h2>Sign in to your account</h2>
                    {/* <Error error={error} /> */}
                    <label htmlFor="email">
                        Email
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.saveToState}
                        />
                    </label>
                    <label htmlFor="password">
                        Password
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.saveToState}
                        />
                    </label>
                    <button type="submit">Sign In</button>
                </fieldset>
            </Form>
        )
    }
}

export default Signin
