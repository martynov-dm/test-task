import { all, call } from 'redux-saga/effects'
import { postsSagas } from './posts/posts.sagas'

function* rootSaga() {
  yield all([call(postsSagas)])
}

export default rootSaga
