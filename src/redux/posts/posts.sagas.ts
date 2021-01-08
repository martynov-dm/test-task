import { postsRequest, usersRequest } from './../../api/api'
import { postsActions } from './posts.actions'

import { takeLatest, all, put, call } from 'redux-saga/effects'

export function* fetchPosts() {
  try {
    const { data } = yield call(postsRequest)
    yield put(postsActions.fetchPostsSuccess(data))
  } catch (error) {
    alert(error)
  }
}
export function* fetchUsers() {
  try {
    const { data } = yield call(usersRequest)
    yield put(postsActions.fetchUsersSuccess(data))
  } catch (error) {
    console.log(error)
  }
}

export function* onPostsFetchStart() {
  yield takeLatest('FETCH_POSTS_START', fetchPosts)
}

export function* onUsersFetchStart() {
  yield takeLatest('FETCH_USERS_START', fetchUsers)
}

export function* postsSagas() {
  yield all([call(onPostsFetchStart), call(onUsersFetchStart)])
}
