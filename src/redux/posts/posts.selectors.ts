import { AppStateType } from '../root-reducer'
import { createSelector } from 'reselect'

const selectPosts = (state: AppStateType) => state.posts
