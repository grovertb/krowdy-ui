import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
  Typography,
  Switch
} from '@krowdy-ui/core'

export const styles = theme => ({
  toggleContainer: {
    display       : 'flex',
    justifyContent: 'space-between',
    width         : '100%'
  },
  toggleLeft: {
    flex       : 1,
    marginRight: theme.spacing(4)
  }
})

function ToggleRole(props) {
  const {
    title,
    subtitle,
    onchange,
    value,
    checked,
    name,
    classes
  } = props

  return (
    <div className={classes.toggleContainer}>
      <div className={classes.toggleLeft}>
        <Typography color='body' gutterBottom variant='h6'>{title}</Typography>
        <Typography color='body' variant='body1'>{subtitle}</Typography>
      </div>
      <div className={classes.toggleRight}>
        <Switch
          checked={checked}
          color='primary'
          onChange={onchange(name)}
          value={value} />
      </div>

    </div>
  )
}

ToggleRole.propTypes = {
  checked : PropTypes.bool.isRequired,
  classes : PropTypes.object,
  name    : PropTypes.string.isRequired,
  onchange: PropTypes.func.isRequired,
  subtitle: PropTypes.string,
  title   : PropTypes.string,
  value   : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
}

ToggleRole.muiName = 'ToggleRole'

export default withStyles(styles, { name: 'ToggleRole' })(ToggleRole)
