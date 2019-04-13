import { handleActions } from 'redux-actions'
import update from "immutability-helper";
import constants from "../constants"

let initialState = {
  isLoading: false,
  isLoggedIn: null,
  message: ''
}

const loginRequest = ( state, action ) => {
  update( state, {
    isLoading: { $set: true },
    isLoading: { $set: true },
    message: { $set: "" },
  })
}

const loginSuccess = ( state, action ) => {
  update( state, {
    isLoading: { $set: false },
    isLoggedIn: { $set: true },
    message: { $set: "Success" },
  })
}

const loginFailed = ( state, action ) => {
  update( state, {
    isLoading: { $set: false },
    isLoggedIn: { $set: false },
    message: { $set: "Failed" },
  })
}

export default handleActions(
  {
    [constants.loginRequest]: loginRequest,
    [constants.loginSuccess]: loginSuccess,
    [constants.loginFailed]: loginFailed
  },
  initialState
)