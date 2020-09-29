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
    marginBottom  : theme.spacing(2),
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
    onChange,
    value,
    checked,
    name,
    disabled,
    classes
  } = props

  const [ active, setActive ] = React.useState(checked)

  React.useEffect(() => {
    setActive(checked)
  }, [checked])

  const _handleChange = () => {
    setActive(prevState => {
      onChange(!prevState)

      return !prevState
    })
  }

  return (
    <div className={classes.toggleContainer}>
      <div className={classes.toggleLeft}>
        <Typography color='body' gutterBottom variant='h6'>{title}</Typography>
        <Typography color='body' gutterBottom variant='body1'>{subtitle}</Typography>
      </div>
      <div className={classes.toggleRight}>
        <Switch
          checked={active}
          color='primary'
          disabled={disabled}
          name={name}
          onChange={_handleChange}
          value={value} />
      </div>

    </div>
  )
}

ToggleRole.propTypes = {
  checked : PropTypes.bool.isRequired,
  classes : PropTypes.object,
  disabled: PropTypes.bool,
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
