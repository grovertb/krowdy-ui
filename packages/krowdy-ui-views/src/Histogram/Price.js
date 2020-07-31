import React from 'react'
import { makeStyles, Typography } from '@krowdy-ui/core'

const Price = ({ price, multiplier, max }) => {
  const classes = useStyles({ max, price })

  return (
    <div className={classes.price}>
      <Typography variant='body1'>{Math.round(price * multiplier)}</Typography>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  price: {
    color   : theme.palette.grey[600],
    position: 'absolute',
    top     : ({ price, max }) => `${100 - (price / max  * 100)}%`
  }
}))

export default Price
