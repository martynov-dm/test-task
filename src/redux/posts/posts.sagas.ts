import { signUpRequest, signInRequest } from './../../api/api'
import { authActions } from './posts.actions'

import { takeLatest, all, put } from 'redux-saga/effects'

import * as Effects from 'redux-saga/effects'

const call: any = Effects.call

export function* signUp(action: TAuthActionsWithPayload) {
  const { login, password, avatar } = action.payload as ILoginPasswordAvatar
  try {
    yield call(signUpRequest, [login, password, avatar])
    yield put(authActions.signUpSuccess())
    yield put(push('/sign-in'))
  } catch (error) {
    yield put(authActions.signUpFailure(error.response.data))
  }
}

export function* onSignInStart() {
  yield takeLatest('SIGN_IN_START', signIn)
}

export function* onSignUpStart() {
  yield takeLatest('SIGN_UP_START', signUp)
}

export function* authSagas() {
  yield all([call(onSignInStart), call(onSignUpStart)])
}
