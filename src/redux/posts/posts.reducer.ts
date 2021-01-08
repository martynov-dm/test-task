import { IPost, IUser } from './../../types/types'
import { PostsActionTypes } from './posts.actions'

const INITIAL_STATE = {
  userData: [] as IUser[],
  postsData: [] as IPost[],

  postsFetch: {
    status: 'idle' as 'idle' | 'loading' | 'succeeded',
  },
  usersFetch: {
    status: 'idle' as 'idle' | 'loading' | 'succeeded',
  },
}

export type InitialStateType = typeof INITIAL_STATE

const postsReducer = (
  state = INITIAL_STATE,
  action: PostsActionTypes
): InitialStateType => {
  switch (action.type) {
    case 'FETCH_USERS_START':
      return {
        ...state,
        usersFetch: { status: 'loading' },
      }
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        usersFetch: { status: 'succeeded' },
        userData: action.payload,
      }
    case 'FETCH_POSTS_START':
      return {
        ...state,
        postsFetch: { status: 'loading' },
      }
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        postsFetch: { status: 'succeeded' },
        postsData: action.payload,
      }

    default:
      return state
  }
}

export default postsReducer
