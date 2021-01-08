import axios from 'axios'

export const fetchPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1')
}

export const fetchUsers = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1')
}
