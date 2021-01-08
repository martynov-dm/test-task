import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { postsActions } from './redux/posts/posts.actions'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(postsActions.fetchPostsStart())
    dispatch(postsActions.fetchUsersStart())
  }, [dispatch])

  return <div className='App'> dick</div>
}

export default App
