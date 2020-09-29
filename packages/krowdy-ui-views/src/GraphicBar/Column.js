import React from 'react'
import clsx from 'clsx'
import { makeStyles, Tooltip, Typography } from '@krowdy-ui/core'
import { UserPoint } from '@krowdy-ui/views'

const Column = ({ index, divider, max, salary, multiplier, firstName, lastName, photo, selected }) => {
  const avarage = salary / max / multiplier
  const classes = useStyles({ avarage, divider, percent: (avarage <= 1 ? avarage : 1) * 100 })

  return (
    <div className={clsx(classes.columnContainer, {
      [classes.leftLine]  : index === 0,
      [classes.rightLine] : index === divider - 1,
      [classes.centerLine]: index > 0 && index < divider - 1
    })}>
      <Tooltip
        arrow
        placement='top'
        title={(
          <>
            <Typography className={classes.tooltipTitle}>{firstName} {lastName}</Typography>
            <Typography>{`S/ ${salary}`}</Typography>
          </>
        )}>
        <div className={classes.bar}>
        </div>
      </Tooltip>
      <UserPoint
        active={selected}
        bottom={-30}
        classes={{
          avatar: classes.avatar,
          point : classes.point
        }}
        firstName={firstName}
        lastName={lastName}
        leftPercent={50}
        photo={photo}
        subtitle={`S/ ${salary}`} />
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  avatar: {
  },
  bar: {
    backgroundColor: theme.palette.primary[100],
    borderTop      : ({ avarage }) => `${avarage <= 1 ? 1 : 0}px solid ${theme.palette.primary[600]}`,
    height         : ({ percent }) => `${percent}%`,
    width          : '100%'
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
  hide: {
    display: 'none'
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
  },
  show: {
    display: 'block'
  },
  tooltipTitle: {
    fontSize  : 12,
    fontWeight: 'bold'
  }
}), { name: 'Column' })

export default Column
