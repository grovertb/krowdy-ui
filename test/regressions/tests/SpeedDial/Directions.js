import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
import { capitalize } from '@material-ui/core/utils'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'

const styles = {
  directionDown : {},
  directionLeft : {},
  directionRight: {},
  directionUp   : {},
  root          : {
    height  : 360,
    position: 'relative',
    width   : 400
  },
  speedDial: {
    '&$directionDown': {
      left: 0,
      top : 0
    },
    '&$directionLeft': {
      right: 0,
      top  : 0
    },
    '&$directionRight': {
      bottom: 0,
      left  : 0
    },
    '&$directionUp': {
      bottom: 0,
      right : 0
    },
    position: 'absolute'
  }
}

function SimpleSpeedDial(props) {
  const tooltipPlacement = {
    down : 'right',
    left : 'bottom',
    right: 'top',
    up   : 'left'
  }

  return (
    <SpeedDial icon={<SpeedDialIcon />} open {...props}>
      {[ 'A', 'B', 'C' ].map(name => (
        <SpeedDialAction
          icon={<Avatar>{name}</Avatar>}
          key={name}
          tooltipOpen
          tooltipPlacement={tooltipPlacement[props.direction]}
          tooltipTitle={'Tooltip'} />
      ))}
    </SpeedDial>
  )
}

SimpleSpeedDial.propTypes = {
  direction: PropTypes.string.isRequired
}

function Directions({ classes }) {
  const speedDialClassName = direction =>
    clsx(classes.speedDial, classes[`direction${capitalize(direction)}`])

  return (
    <div className={classes.root}>
      {[ 'up', 'down' ].map(direction => (
        <SimpleSpeedDial
          ariaLabel={direction}
          className={speedDialClassName(direction)}
          direction={direction}
          key={direction} />
      ))}
    </div>
  )
}

Directions.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Directions)
