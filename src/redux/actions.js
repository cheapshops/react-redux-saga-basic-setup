import { createAction } from 'redux-actions'
import constants from './constants'

export const loginRequest = createAction( constants.LOGIN_REQUEST )
export const loginSuccess = createAction( constants.LOGIN_SUCCESS )
export const loginFailed = createAction( constants.LOGIN_FAILED )