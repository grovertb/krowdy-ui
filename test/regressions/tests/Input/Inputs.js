import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'

const styles = {
  container: {
    display      : 'flex',
    flexDirection: 'column',
    width        : 200
  },
  input: {
    margin: 10
  },
  large: {
    width: 300
  }
}

function Inputs(props) {
  const { classes } = props
  const inputRef = React.useRef()

  React.useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <div className={classes.container}>
        <Input className={classes.input} value='Hello world' />
        <Input className={classes.input} placeholder='Placeholder' />
        <Input className={classes.input} disabled value='Disabled' />
        <Input className={classes.input} error value='Error' />
        <Input className={classes.input} inputRef={inputRef} value='Focused' />
      </div>
      <Input className={clsx(classes.input, classes.large)} value='Large input' />
    </div>
  )
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Inputs)
