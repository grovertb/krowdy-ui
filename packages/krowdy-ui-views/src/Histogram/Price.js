import React from 'react'
import { makeStyles, Typography } from '@krowdy-ui/core'

const Price = ({ price, index, pricePercent }) => {
  const calc = pricePercent * index
  const classes = useStyles({ calc, price })

  return (
    <div className={classes.price}>
      <Typography variant='body1'>{price ? Math.round(price) : ''}</Typography>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  price: {
    color   : theme.palette.grey[600],
    left    : ({ price, calc }) => `calc(${calc}% - ${Math.round(price).toString().length * 6.85 / 2}px)`,
    position: 'absolute'
  }
}))

export default Price
