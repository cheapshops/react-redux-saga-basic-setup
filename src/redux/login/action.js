import { put, call } from 'redux-saga/effects'
import * as actions from '../actions'

export const apiCall = (request) => {
  const REGISTER_API_ENDPOINT = 'http://localhost:4000/api/v1/register';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export function* loginRequest( action ){
  try {
    const response = yield call(apiCall, action.payload);
    yield [
      put({ type: actions.loginSuccess, response })
    ];
  } catch(error) {
    yield put({ type: actions.loginFailed, error });
  }
}
