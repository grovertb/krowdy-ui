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
    minWidth       : 320,
    position       : 'relative',
    width          : '100%'
  },
  root: {
    alignItems: 'center',
    display   : 'flex',
    height    : 54
  }
})

const SampleBar =({ marks = [], classes, template = () => {}, mark: currentMark }) => {
  const maxValue = Math.ceil(
    marks.reduce((max, mark) => Math.max(max, mark.value), 0)
  )

  return (
    <div className={classes.root}>
      <div className={classes.bar}>
        {new Array(maxValue >= 1 ? maxValue - 1 : 0).fill(1).map((_, index) => (
          <LineVert index={index + 1} key={index} leftPercent={100/ maxValue * (index + 1)} />
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
    </div>
  )
}

SampleBar.propTypes = {
  classes: PropTypes.object,
  mark   : PropTypes.shape({
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
