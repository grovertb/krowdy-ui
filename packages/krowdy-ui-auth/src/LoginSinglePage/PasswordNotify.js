import React from 'react'
import { Paper, makeStyles, IconButton, Button } from '@krowdy-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

const PasswordNotify = ({
  onCreate = () => {},
  onClose = () => {}
}) => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper} variant='elevation' >
      <IconButton
        className={classes.closeButton}
        onClick={onClose}
        size='small'
        variant='outlined'>
        <CloseIcon fontSize='small' />
      </IconButton>
        ¿Te gustaría crear una contraseña para acceder con esta cuenta?
      <Button color='primary' onClick={onCreate}>Crear</Button>
    </Paper>
  )
}
const useStyles = makeStyles(({ palette, spacing, zIndex })=>({
  closeButton: {
    '&:hover': {
      background: palette.grey[800]
    },
    background: palette.grey[800],
    color     : palette.common.white,
    position  : 'absolute',
    right     : -12,
    top       : -12
  },
  paper: {
    background: palette.grey[800],
    color     : palette.common.white,
    display   : 'flex',
    maxWidth  : 324,
    padding   : spacing(1.5, 2),
    position  : 'fixed',
    right     : 54,
    top       : 90,
    zIndex    : zIndex.modal
  }
}))

export default React.memo(PasswordNotify)
