import React from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { isLoggedIn } from "../_services/userServices"

const PleaseLogIn = (props) => {
  if (!isLoggedIn()) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/login`)
    return null
  }
  return props.children
}

PleaseLogIn.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PleaseLogIn