import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/core'
import LineVert from './LineVert'
import UserPoint from './UserPoint'

const styles = (theme) => ({
  bar: {
    backgroundColor: theme.palette.secondary[100],
    borderRadius   : 8,
    height         : 12,
    position       : 'relative',
    width          : 344
  },
  root: {
    alignItems: 'center',
    display   : 'flex',
    height    : 54
  }
})

const SampleBar =({ marks = [], classes, template = '{{value}}', mark }) => {
  const maxValue = Math.ceil(
    marks.reduce((max, mark) => Math.max(max, mark.value), 0)
  )

  return (
    <div className={classes.root}>
      <div className={classes.bar}>
        {new Array(maxValue - 1).fill(1).map((_, index) => (
          <LineVert index={index + 1} key={index} leftPercent={100/ maxValue * (index + 1)} />
        ))}
        {marks.map(({ firstName, _id, lastName, value: dataValue, photo }) => {
          const active = mark && _id === mark._id

          return (
            <UserPoint
              active={active}
              firstName={firstName}
              key={_id}
              lastName={lastName}
              leftPercent={(dataValue / maxValue) * 100}
              photo={photo}
              subtitle={template.replace(new RegExp('{{value}}', 'g'), dataValue)} />
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
  template: PropTypes.string
}

export default withStyles(styles, { name: 'SampleBar' })(SampleBar)
