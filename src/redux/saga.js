import { takeLatest } from 'redux-saga/effects'
import constants from './constants'

import { loginRequest } from './login/action'

function* watchActions() {
  yield takeLatest( constants.LOGIN_REQUEST, loginRequest)
}

export default function* rootSaga() {
  yield watchActions()
}