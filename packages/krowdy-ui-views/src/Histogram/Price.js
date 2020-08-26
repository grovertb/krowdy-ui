import React from 'react'
import { makeStyles, Typography } from '@krowdy-ui/core'

const Price = ({ price/* , max */, index, length, middle, offset }) => {
  const calc = middle ? offset + index / length  * (100 - offset) : offset
  console.log(calc)
  const classes = useStyles({ calc, price })

  // if((index % 2) === 1) return null

  return (
    <div className={classes.price}>
      <Typography variant='body1'>{Math.round(price)}</Typography>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  price: {
    color   : theme.palette.grey[600],
    left    : ({ calc, price }) => `calc(${calc}% - ${Math.round(price).toString().length * 6.85 / 2}px)`,
    position: 'absolute'
  }
}))

export default Price
