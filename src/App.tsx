import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import { postsActions } from './redux/posts/posts.actions'
import { selectPostsArr, selectUsersArr } from './redux/posts/posts.selectors'
import Card from './components/Card'
import Search from './components/Search'

const useStyles = makeStyles({
  gridContainer: {
    paddingTop: '30px',
    paddingLeft: '50px',
    paddingRight: '50px',
  },
})

const App: React.FC = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectPostsArr)
  const users = useSelector(selectUsersArr)

  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    dispatch(postsActions.fetchPostsStart())
    dispatch(postsActions.fetchUsersStart())
  }, [dispatch])

  const classes = useStyles()

  posts.forEach((post) => {
    const user = users.find((user) => user.id === post.userId)
    post.userName = user?.name as string
  })

  const filteredPosts = posts.filter((post) =>
    post.userName.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />

      <Grid container className={classes.gridContainer} spacing={3}>
        {filteredPosts.map((post) => {
          return (
            <Grid key={post.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <Card
                title={post.title}
                body={post.body}
                author={post.userName}
              />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default App
