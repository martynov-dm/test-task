export type InferActionTypes<T> = T extends {
  [key: string]: (...arg: any[]) => infer U
}
  ? U
  : never

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}
export interface IUser {
  id: number
  name: string
}
