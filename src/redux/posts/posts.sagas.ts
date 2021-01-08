import { postsRequest, usersRequest } from './../../api/api'
import { postsActions } from './posts.actions'

import { takeLatest, all, put } from 'redux-saga/effects'

import * as Effects from 'redux-saga/effects'

const call: any = Effects.call

export function* fetchPosts() {
  try {
    const { data } = yield call(postsRequest)
    console.log(data)
    yield put(postsActions.fetchPostsStart())
  } catch (error) {
    alert(error)
  }
}
export function* fetchUsers() {
  try {
    const { data } = yield call(usersRequest)
    console.log(data)
    yield put(postsActions.fetchPostsStart())
  } catch (error) {
    alert(error)
  }
}

export function* onPostsFetchStart() {
  yield takeLatest('FETCH_USERS_START', fetchPosts)
}

export function* onPostsUsersStart() {
  yield takeLatest('FETCH_POSTS_START', fetchUsers)
}

export function* postsSagas() {
  yield all([call(onPostsFetchStart), call(onPostsUsersStart)])
}
