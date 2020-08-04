import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@krowdy-ui/core'
import Column from './Column'
import Price from './Price'

let interval = 4
let emptyPrices = new Array(interval)

const parsePrice = (price) => Math.ceil(price / 10**(price.toString().length - 1)) * 10**(price.toString().length - 1)

const Histogram = ({ multiplier = 1, candidates = [] }) => {
  const divider = candidates.length
  const max = candidates.map(({ salary }) => salary).sort((a, b) => b - a)[0]
  const prices = Array.from(emptyPrices, (value, index) => parsePrice(Math.ceil(max - (max / 4 * index))))
  const classes = useStyles({ max: prices[0], multiplier })

  return (
    <div className={classes.root}>
      <div className={clsx(classes.row, classes.container)}>
        <div className={clsx(classes.column, classes.prices)}>
          {
            prices.map((price, index) => (
              <Price
                key={index}
                max={prices[0]}
                multiplier={multiplier}
                price={price} />
            ))
          }
        </div>
        <div className={clsx(classes.containerHistogram, classes.row)}>
          {
            candidates.map(({ salary, selected, firstName, lastName, photo }, index) => (
              <Column
                divider={divider}
                firstName={firstName}
                index={index}
                key={index}
                lastName={lastName}
                max={prices[0]}
                multiplier={multiplier}
                photo={photo}
                salary={salary}
                selected={selected} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

Histogram.propTypes = {
  candidates: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string,
    lastName : PropTypes.string,
    photo    : PropTypes.string,
    salary   : PropTypes.number,
    selected : PropTypes.bool
  })),
  multiplier: PropTypes.number
}

const useStyles = makeStyles((theme) => ({
  column: {
    display      : 'flex',
    flexDirection: 'column'
  },
  container: {
    height   : '100%',
    marginTop: theme.spacing(7),
    minHeight: 150,
    width    : '100%'
  },
  containerHistogram: {
    borderBottom : `1px solid ${theme.palette.grey[600]}`,
    display      : 'flex',
    flexDirection: 'row',
    height       : 'inherit',
    width        : 'inherit'
  },
  price: {
    color: theme.palette.grey[600]
  },
  prices: {
    position: 'relative',
    width   : ({ max, multiplier }) => (max * multiplier).toString().length * 9
  },
  root: {
    display: 'flex',
    height : 'calc(100% - 115px)'
  },
  row: {
    display      : 'flex',
    flexDirection: 'row'
  }
}), { name: 'Histogram' })

export default Histogram
