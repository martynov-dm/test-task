import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Card as MuiCard,
  CardContent,
  Typography,
  CardMedia,
  CardActionArea,
} from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderWidth: 2,
    borderColor: 'black',
  },

  titleInitial: {
    lineHeight: '1.5em',
    height: '3em',
    overflow: 'hidden',
  },
  hr: {
    width: '90%',
    border: 'none',
    marginBottom: 0,
    marginTop: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.28)',
    height: 1,
  },
  buttonsContainer: {
    alignSelf: 'flex-end',
    width: '100%',
    paddingTop: 7,
  },
  descriptionInitial: {
    lineHeight: '1.5em',
    height: '9em',
    overflow: 'hidden',
  },
})

interface IProps {
  title: string
  body: string
  author: string | undefined
}

const Card = (props: IProps) => {
  const { title, body, author } = props
  const classes = useStyles()

  return (
    <MuiCard className={classes.root}>
      <CardContent>
        <Typography
          style={{ color: '#3d83df', marginBottom: '1rem' }}
          display='block'
          gutterBottom
          variant='h5'
          component='h2'
        >
          {title}
        </Typography>
        <Typography style={{ marginBottom: '1rem' }} display='block'>
          {body}
        </Typography>
        <Typography style={{ opacity: '0.7' }} variant='body2'>
          {author}
        </Typography>
      </CardContent>
    </MuiCard>
  )
}

export default Card
