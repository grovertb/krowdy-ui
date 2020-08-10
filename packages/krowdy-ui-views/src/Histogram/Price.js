import React from 'react'
import { makeStyles, Typography } from '@krowdy-ui/core'

const Price = ({ price, max, index }) => {
  const classes = useStyles({ max, price })

  if((index % 2) === 1) return null

  return (
    <div className={classes.price}>
      <Typography variant='body1'>{price}</Typography>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  price: {
    color   : theme.palette.grey[600],
    left    : ({ price, max }) => `calc(${( price / max  * 100)}% - ${price.toString().length * 6.85 / 2}px)`,
    position: 'absolute'
  }
}))

export default Price
