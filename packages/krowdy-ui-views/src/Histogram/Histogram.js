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
    const price = prices.find((price, index) => match >= price && match <= prices[index + 1])

    if(price) {
      resultObject[price] = resultObject[price] || []
      resultObject[price].push(x)
    }

    return resultObject
  }, {})
}

// let interval = 8
// let emptyPrices = new Array(interval)

const Histogram = ({ multiplier = 1, candidates = [] }) => {
  const max = candidates.reduce((r, { salary }) => Math.max(r, salary), 1)
  const min = candidates.reduce((r, { salary }) => Math.min(r, salary), Infinity)
  const interval = (max - min) / multiplier
  let emptyPrices = new Array(multiplier + 1).fill(min)

  const rawPrices = Array.from(emptyPrices, (value, index) => value + (interval * index))
  const prices = [ 0, ...rawPrices ]

  const classes = useStyles({ max })

  const rawData = groupByObject(candidates, rawPrices, ({ salary }) => salary)

  const keys = Object.keys(rawData)
  const maxCandidates = [ ...keys ].sort((a, b) => rawData[b].length - rawData[a].length)[0]

  const maxCandidatesSize = rawData[maxCandidates] ? rawData[maxCandidates].length : 0

  const columnPrices = prices.slice(0, prices.length - 1)

  const pricePercent = 100 / prices.length

  return (
    <div className={classes.root}>
      <div className={clsx(classes.column, classes.countCandidates)}>
        {
          (new Array(maxCandidatesSize)).fill(maxCandidatesSize).map((count, index) => (
            <Count count={count} index={index} key={index} />
          ))
        }
      </div>
      <div className={clsx(classes.column, classes.container)}>
        <div className={clsx(classes.containerHistogram, classes.row)}>
          {
            columnPrices.map((key, index) => (
              <Column
                candidates={rawData[key] || []}
                divider={columnPrices.length}
                index={index}
                key={index}
                max={max}
                maxCandidates={maxCandidatesSize}
                pricePercent={pricePercent} />
            ))
          }
        </div>
        <div className={clsx(classes.row, classes.prices)}>
          {
            prices.map((price, index) => (
              <Price
                index={index}
                key={index}
                price={price}
                pricePercent={pricePercent} />
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
