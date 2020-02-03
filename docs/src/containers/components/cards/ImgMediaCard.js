import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  }
}, { name: 'ImgMediaCard' })

export default function ImgMediaCard() {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          alt='Contemplative Reptile'
          component='img'
          height='140'
          image='https://material-ui.com/static/images/cards/contemplative-reptile.jpg'
          title='Contemplative Reptile' />
        <CardContent>
          <Typography component='h2' gutterBottom variant='h5'>
            Lizard
          </Typography>
          <Typography color='textSecondary' component='p' variant='body2'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color='primary' size='small'>
          Share
        </Button>
        <Button color='primary' size='small'>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
