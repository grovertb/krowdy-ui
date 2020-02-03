import React from 'react'
import { makeStyles } from '@krowdy-ui/styles'
import { Card, CardActions, CardContent, Button, Typography, CardHeader } from '@krowdy-ui/core'

const useStyles = makeStyles({
  bullet: {
    display  : 'inline-block',
    margin   : '0 2px',
    transform: 'scale(0.8)'
  },
  card: {
    minWidth: 275
  },
  pos: {
    marginBottom: 12
  },
  root: {
    '& > div': {
      margin: 4
    },
    display: 'flex'
  },
  title: {
    fontSize: 14
  }
}, { name: 'OutlinedCard' })

export default function OutlinedCard() {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <div className={classes.root}>
      <Card className={classes.card} hoverable variant='outlined'>
        <CardContent>
          <Typography className={classes.title} color='textSecondary' gutterBottom>
          Word of the Day
          </Typography>
          <Typography component='h2' variant='h5'>
          be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
          adjective
          </Typography>
          <Typography component='p' variant='body2'>
          well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>

      <Card className={classes.card} variant='outlined'>
        <CardHeader shadow title='Task' titleTypographyProps={{ variant: 'h6' }} />
        <CardContent>
          <Typography className={classes.title} color='textSecondary' gutterBottom>
          Word of the Day
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  )
}
