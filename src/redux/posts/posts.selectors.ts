import { AppStateType } from '../root-reducer'
import { createSelector } from 'reselect'

const selectPosts = (state: AppStateType) => state.posts

export const selectPostsArr = createSelector(
  [selectPosts],
  (posts) => posts.postsData
)

export const selectUsersArr = createSelector(
  [selectPosts],
  (posts) => posts.userData
)
