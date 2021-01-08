import { InferActionTypes } from '../../types/types'

export type PostsActionTypes = InferActionTypes<typeof postsActions>

export const postsActions = {
  signUpStart: () => {
    return {
      type: 'SIGN_UP_START',
      payload: loginPasswordAvatar,
    } as const
  },
  signUpSuccess: () => {
    return {
      type: 'SIGN_UP_SUCCESS',
    } as const
  },
  signUpFailure: (errorMessage: string) => {
    return {
      type: 'SIGN_UP_FAILURE',
      payload: errorMessage,
    } as const
  },
  signUpClear: () => {
    return {
      type: 'SIGN_UP_CLEAR',
    } as const
  },
  signInStart: (loginAndPassword: ILoginAndPassword) => {
    return {
      type: 'SIGN_IN_START',
      payload: loginAndPassword,
    } as const
  },
  signInSuccess: () => {
    return {
      type: 'SIGN_IN_SUCCESS',
    } as const
  },
  signInFailure: (errorMessage: string) => {
    return {
      type: 'SIGN_IN_FAILURE',
      payload: errorMessage,
    } as const
  },
  signInClear: () => {
    return {
      type: 'SIGN_IN_CLEAR',
    } as const
  },
  addUserData: (userData: IUser) => {
    return {
      type: 'ADD_USER_DATA',
      payload: userData,
    } as const
  },
}
