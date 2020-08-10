import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@krowdy-ui/core'
import Bar from './Bar'

const Column = ({ candidates, index, divider, maxCandidates }) => {
  const classes = useStyles({ divider })

  return (
    <div className={clsx(classes.columnContainer, {
      [classes.leftLine]  : index === 0,
      [classes.rightLine] : index === divider - 1,
      [classes.centerLine]: index > 0 && index < divider - 1
    })}>
      <div className={classes.containerBar}>
        {
          candidates.map((candidate, index) => (
            <Bar
              candidate={candidate}
              index={index}
              key={index}
              max={candidates.length}
              maxCandidates={maxCandidates} />
          ))
        }
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  avatar: {
  },
  centerLine: {
    borderLeft : `1px solid ${theme.palette.grey[200]}`,
    borderRight: `1px solid ${theme.palette.grey[200]}`
  },
  columnContainer: {
    '& $point': {
      backgroundColor: theme.palette.grey[300]
    },
    '&:hover': {
      '& $avatar': {
        display: 'block'
      },
      '& $point': {
        display: 'none'
      }
    },
    alignItems    : 'flex-end',
    display       : 'flex',
    height        : 'inherit',
    justifyContent: 'center',
    position      : 'relative',
    width         : ({ divider }) => `${100 / divider}%`
  },
  containerBar: {
    display      : 'flex',
    flexDirection: 'column-reverse',
    height       : '100%',
    width        : '100%'
  },
  leftLine: {
    borderLeft : `2px solid ${theme.palette.grey[200]}`,
    borderRight: `1px solid ${theme.palette.grey[200]}`
  },
  point: {
  },
  rightLine: {
    borderLeft : `1px solid ${theme.palette.grey[200]}`,
    borderRight: `2px solid ${theme.palette.grey[200]}`
  }
}), { name: 'Column' })

export default Column
