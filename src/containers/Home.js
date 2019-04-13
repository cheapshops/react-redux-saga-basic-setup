import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loginRequest } from '../redux/actions'

class Home extends Component {

  fireAction = () => {
    this.props.loginRequest({
      username:'test',
      password:'test'
    })
  }

  render() {
    return (
      <div>
        <h1> HOME </h1>
        <input type="button" value="Fire Action" onClick={this.fireAction}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  login: state.login
})

const mapDisptachToProps = dispatch => ({
  loginRequest: (data) => dispatch( loginRequest(data))
})

export default connect(
  mapStateToProps,
  mapDisptachToProps
)( Home )
