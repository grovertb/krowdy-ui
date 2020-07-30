import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { makeStyles, Tooltip, Typography } from '@krowdy-ui/core'

const Circle = (props) => {
  const {
    firstName = '',
    lastName = '',
    subtitle,
    max = 4,
    size = 4,
    selected = false
  } = props
  const classes = useStyles({ max, size })

  return (
    <Tooltip
      arrow
      placement='top'
      title={(
        <>
          <Typography className={classes.tooltipTitle}>{firstName} {lastName}</Typography>
          <Typography>{subtitle}</Typography>
        </>
      )}>
      <div className={clsx(classes.root, {
        [classes.hover]   : !selected,
        [classes.unselect]: !selected,
        [classes.select]  : selected
      })} />
    </Tooltip>
  )
}

Circle.propTypes = {
  firstName: PropTypes.string,
  lastName : PropTypes.string,
  max      : PropTypes.number,
  selected : PropTypes.bool,
  size     : PropTypes.number,
  subtitle : PropTypes.string
}

const useStyles = makeStyles((theme) => ({
  hover: {
    '&:hover': {
      backgroundColor: theme.palette.primary[300]
    }
  },
  root: {
    borderRadius: '50%',
    height      : ({ size, max }) => (7 / (max - 1) * (size - 1)) * 4,
    width       : ({ size, max }) => (7 / (max - 1) * (size - 1)) * 4
  },
  select: {
    backgroundColor: theme.palette.primary[500]
  },
  unselect: {
    backgroundColor: ({ size }) => theme.palette.secondary[size > 1 ? 100 : 0]
  }
}))

export default Circle
