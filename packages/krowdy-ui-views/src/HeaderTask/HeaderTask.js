import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { Paper, Typography, Button, TextField, Switch, IconButton } from '@krowdy-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export const styles = theme => ({
  headerLeft: {
    flex: '1'
  },
  iconArrow: {
    height: 18,
    width: 18
  },
  paper: {
    display: 'flex',
    height: 56,
    width: 1308
  }
})

const HeaderTask = props => {
  const activeTask = false
  const {
    classes,

  } = props

  return (
    <Paper className={classes.paper}>
      <IconButton className={classes.iconArrow}>
        <ArrowBackIcon />
      </IconButton>
      <Typography>
        Video Cuestionario
      </Typography>
      <Button>
        10 Candidatos - Etapa 1
      </Button>

      <TextField
        label='Titulo de video entrevista'
      >

      </TextField>
      {
        activeTask
          ?
          <div>
            <Switch>

            </Switch>
            <Button>
              Actualizar tarea</Button>
          </div>
          :
          <div>
            <Button>
              Guardar Borrador
            </Button>
            <Button>
              Activar tarea
            </Button>
          </div>

      }
    </Paper>

  )
}

HeaderTask.propTypes = {
  classes: PropTypes.object,

}

HeaderTask.muiName = 'HeaderTask'

export default withStyles(styles, { name: 'KrowdyHeaderTask' })(HeaderTask)