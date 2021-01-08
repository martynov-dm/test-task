import { AppStateType } from '../store'
import { createSelector } from 'reselect'

const selectAuth = (state: AppStateType) => state.auth
