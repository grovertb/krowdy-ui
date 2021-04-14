import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/core'
import { UserPoint } from '@krowdy-ui/views'
import LineVert from './LineVert'

const styles = (theme) => ({
  bar: {
    backgroundColor: theme.palette.secondary[100],
    borderRadius   : 8,
    height         : 12,
    minWidth       : 100,
    position       : 'relative',
    width          : '100%'
  },
  endAdornment: {
    alignItems: 'center',
    display   : 'flex',
    marginLeft: theme.spacing(1.5)
  },
  root: {
    alignItems: 'center',
    display   : 'flex',
    height    : 54
  },
  startAdornment: {
    marginRight: theme.spacing(1.5)
  }
})

const SampleBar =({
  marks = [],
  classes,
  template = () => {},
  mark: currentMark,
  IconComponent,
  customLabel
}) => {
  const maxValue = Math.ceil(
    marks.reduce((max, mark) => Math.max(max, mark.value), 0)
  )

  return (
    <div className={classes.root}>
      { IconComponent ? (
        <IconComponent className={classes.startAdornment} color='primary' fontSize='small' />
      ) :null}
      <div className={classes.bar}>
        {new Array(maxValue >= 1 ? maxValue - 1 : 0).fill(1).map((_, index) => (
          <LineVert
            customLabel={customLabel}
            index={index + 1}
            key={index}
            leftPercent={100/ maxValue * (index + 1)} />
        ))}
        {marks.map((mark) => {
          const { firstName, _id, lastName, value, photo } = mark
          const active = currentMark && _id === currentMark._id

          return (
            <UserPoint
              active={active}
              firstName={firstName}
              key={_id}
              lastName={lastName}
              leftPercent={(value / (maxValue || 1)) * 100}
              photo={photo}
              subtitle={template(mark)} />
          )
        })}
      </div>
      { IconComponent ? (
        <div className={classes.endAdornment}>
          <IconComponent color='primary' fontSize='small' />
          <IconComponent color='primary' fontSize='default' />
          <IconComponent color='primary' fontSize='small' />
        </div>
      ) :null}
    </div>
  )
}

SampleBar.propTypes = {
  IconComponent: PropTypes.elementType,
  classes      : PropTypes.object,
  customLabel  : PropTypes.func,
  mark         : PropTypes.shape({
    _id      : PropTypes.string,
    firstName: PropTypes.string,
    lastName : PropTypes.string,
    photo    : PropTypes.string,
    value    : PropTypes.number
  }),
  marks: PropTypes.arrayOf(PropTypes.shape({
    _id      : PropTypes.string,
    firstName: PropTypes.string,
    lastName : PropTypes.string,
    photo    : PropTypes.string,
    value    : PropTypes.number
  })),
  template: PropTypes.func
}

export default withStyles(styles, { name: 'SampleBar' })(SampleBar)
