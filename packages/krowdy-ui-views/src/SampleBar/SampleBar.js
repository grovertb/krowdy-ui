import React from 'react'
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
  element: {
    borderRadius: '50%',
    position    : 'absolute',
    top         : 2
  },
  root: {
    alignItems: 'center', display: 'flex', height: 54
  }
})

const WIDTH = 344
function SampleBar({ dataSource, classes, template = '{{value}}', value }) {
  const maxValue = Math.ceil(
    dataSource.reduce((max, element) => Math.max(max, element.value), 0)
  )

  const widthInterval = WIDTH / maxValue

  return (
    <div className={classes.root}>
      <div className={classes.bar}>
        {new Array(maxValue - 1).fill(1).map((_, index) => (
          <LineVert index={index + 1} key={index} left={widthInterval * (index + 1)} />
        ))}
        {dataSource.map(({ firstName, _id, lastName, value: dataValue, photo }) => {
          const active = _id === value._id

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

export default withStyles(styles, { name: 'SampleBar' })(SampleBar)
