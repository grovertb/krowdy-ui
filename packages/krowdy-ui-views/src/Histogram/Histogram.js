import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles } from '@krowdy-ui/core'
import Column from './Column'
import Price from './Price'
import Count from './Count'

const groupByObject = function(array, prices, keyGetter = (x) => x) {
  return array.reduce((resultObject, x) => {
    const match = keyGetter(x)
    const price = prices.find((price, index) => price >= match && prices[index + 1] < match)
    if(price) {
      resultObject[price] = resultObject[price] || []
      resultObject[price].push(x)
    }

    return resultObject
  }, {})
}

let interval = 8
let emptyPrices = new Array(interval)

const Histogram = ({ multiplier = 1, candidates = [] }) => {
  const max = candidates.reduce((r, { salary }) => Math.max(r, salary), 1)

  const rawPrices = Array.from(emptyPrices, (value, index) => Math.round(Math.ceil(max - (max / interval * index)) * multiplier / 250) * 250)
  const prices = [ ...rawPrices, 0 ]

  const classes = useStyles({ max: prices[0] })

  const rawData = groupByObject(candidates, prices, ({ salary }) => salary)

  const keys = Object.keys(rawData)
  const maxCandidates = [ ...keys ].sort((a, b) => rawData[b].length - rawData[a].length)[0]

  return (
    <div className={classes.root}>
      <div className={clsx(classes.column, classes.countCandidates)}>
        {
          (new Array(rawData[maxCandidates].length)).fill(rawData[maxCandidates].length).map((count, index) => (
            <Count count={count} index={index} key={index} />
          ))
        }
      </div>
      <div className={clsx(classes.column, classes.container)}>
        <div className={clsx(classes.containerHistogram, classes.row)}>
          {
            [ ...rawPrices ].reverse().map((key, index) => (
              <Column
                candidates={rawData[key] || []}
                divider={rawPrices.length}
                index={index}
                key={index}
                maxCandidates={rawData[maxCandidates].length} />
            ))
          }
        </div>
        <div className={clsx(classes.row, classes.prices)}>
          {
            prices.map((price, index) => (
              <Price
                index={index}
                key={index}
                max={prices[0]}
                maxCandidates={rawData[maxCandidates].length}
                price={price} />
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
  countCandidates: {
    alignItems: 'center'
  },
  price: {
    color: theme.palette.grey[600]
  },
  prices: {
    position: 'relative'
  },
  root: {
    display      : 'flex',
    height       : 'calc(100% - 32px)',
    marginTop    : theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingRight : theme.spacing(1)
  },
  row: {
    display      : 'flex',
    flexDirection: 'row'
  }
}), { name: 'Histogram' })

export default Histogram
