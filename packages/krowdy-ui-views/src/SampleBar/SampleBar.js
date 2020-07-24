import React from 'react'
import { withStyles } from '@krowdy-ui/core'
import LineVert from './LineVert'
import UserPoint from './UserPoint'

const styles = {
  element: {
    borderRadius: '50%',
    position    : 'absolute',
    top         : 2
  },
  root: {
    backgroundColor: '#CCD4E0',
    borderRadius   : 8,
    height         : 12,
    position       : 'relative',
    width          : 344
  }
}

const WIDTH = 344
const selectedIndex = 0
function SampleBar({ values, classes }) {
  const maxValue = Math.ceil(
    values.reduce((max, element) => Math.max(max, element.value), 0)
  )

  const widthInterval = WIDTH / maxValue

  return (
    <div className={classes.root}>
      {new Array(maxValue - 1).fill(1).map((_, index) => (
        <LineVert key={index} left={widthInterval * (index + 1)} />
      ))}
      {values.map((element, index) => {
        const selected = index === selectedIndex

        return (
          <UserPoint
            key={element._id}
            leftPercent={(element.value / maxValue) * 100}
            photo={element.photo}
            selected={selected} />
        )
      })}
    </div>
  )
}

export default withStyles(styles, { name: 'SampleBar' })(SampleBar)
