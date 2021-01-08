import axios from 'axios'

export const postsRequest = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
}

export const usersRequest = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users')
}
