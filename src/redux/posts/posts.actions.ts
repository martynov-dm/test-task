import { IPost, IUser, InferActionTypes } from './../../types/types'

export type PostsActionTypes = InferActionTypes<typeof postsActions>

export const postsActions = {
  fetchPostsStart: () => {
    return {
      type: 'FETCH_POSTS_START',
    } as const
  },
  fetchPostsSuccess: (postsData: IPost[]) => {
    return {
      type: 'FETCH_POSTS_SUCCESS',
      payload: postsData,
    } as const
  },
  fetchUsersStart: () => {
    return {
      type: 'FETCH_USERS_START',
    } as const
  },
  fetchUsersSuccess: (usersData: IUser[]) => {
    return {
      type: 'FETCH_USERS_SUCCESS',
      payload: usersData,
    } as const
  },
}
