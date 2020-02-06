import React from 'react'
import { makeStyles, useTheme } from '@krowdy-ui/styles'
import { Card, CardContent, CardMedia, IconButton, Typography } from '@krowdy-ui/core'
import {
  SkipPrevious as SkipPreviousIcon,
  PlayArrow as PlayArrowIcon,
  SkipNext as SkipNextIcon
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex'
  },
  content: {
    flex: '1 0 auto'
  },
  controls: {
    alignItems   : 'center',
    display      : 'flex',
    paddingBottom: theme.spacing(1),
    paddingLeft  : theme.spacing(1)
  },
  cover: {
    width: 151
  },
  details: {
    display      : 'flex',
    flexDirection: 'column'
  },
  playIcon: {
    height: 38,
    width : 38
  }
}), { name: 'MediaControlCard' })

export default function MediaControlCard() {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component='h5' variant='h5'>
            Live From Space
          </Typography>
          <Typography color='textSecondary' variant='subtitle1'>
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label='previous'>
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label='play/pause'>
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label='next'>
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image='https://material-ui.com/static/images/cards/live-from-space.jpg'
        title='Live from space album cover' />
    </Card>
  )
}
