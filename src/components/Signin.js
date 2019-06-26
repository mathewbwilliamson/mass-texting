import React from 'react'
import { navigate } from "gatsby"

import Form from '../styles/Form'
import {userService} from '../_services/userServices'

class Signin extends React.Component {
    constructor(props) {
        super(props)

        userService.logout()

        this.state = {
            email: '',
            password: '',
            submitted: false,
            loading: false,
            error: ''
        }
        this.saveToState = this.saveToState.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    saveToState(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
        return null
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;

        // stop here if form is invalid
        if (!(email && password)) {
            return;
        }

        this.setState({ loading: true });
        userService.login(email, password)
            .then(user => {
                // const { from } = this.props.location.state || { from: { pathname: "/" } };
                // this.props.history.push(from);
                navigate(`/sendAText`)
            })
            .catch(error => this.setState({ error, loading: false }))
    }

    render() {
        return (
            <Form
                onSubmit={this.handleSubmit}
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
