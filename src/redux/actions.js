import { createAction } from 'redux-actions'
import constants from './constants'

export const LOGIN_REQUEST = createAction( constants.LOGIN_REQUEST )
export const LOGIN_SUCCESS = createAction( constants.LOGIN_SUCCESS )
export const LOGIN_FAILED = createAction( constants.LOGIN_FAILED )