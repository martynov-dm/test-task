import { combineReducers } from 'redux'
import postsReducer from './posts/posts.reducer'

export type AppStateType = ReturnType<RootReducerType>

type RootReducerType = typeof rootReducer

const rootReducer = combineReducers({
  posts: postsReducer,
})

export default rootReducer
