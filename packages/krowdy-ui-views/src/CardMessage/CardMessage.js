import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
  Card, CardHeader, CardContent, TextField, Switch, Divider, Select, MenuItem
} from '@krowdy-ui/core'

export const styles = () => ({
  card: {
    height: 'auto',
    width : 420
  },
  container: {
    display      : 'flex',
    flexDirection: 'column'
  },
  hours: {
    width: 36
  },
  text: {
    color     : '#262626',
    fontSize  : 14,
    fontWeight: 'normal'
  },
  title: {
    color     : '#262626',
    fontSize  : 14,
    fontWeight: 'bold'
  }
})

const CardMessage = props => {
  const {
    classes
  } = props

  return (
    <Card className={classes.card}>
      <CardHeader
        title='1. Mensajeria' />
      <Divider />
      <CardContent>
        <div className={classes.container}>
          <span className={classes.title}>
            Selecciona la frecuencia del mensaje
          </span>
          <span>
            Seguimiento cada
            <TextField className={classes.hours}>
            </TextField>
            <Select>
              <MenuItem>Horas</MenuItem>
            </Select>
          </span>
          <span>
            Termina en
          </span>

        </div>
        <div className={classes.container}>
          <span className={classes.title}>
            Bloqueo de horarios
          </span >
          <Switch>
          </Switch>
          <span>
            De datepicker
          </span>
        </div>
        <div className={classes.container} >
          <span className={classes.title}>
            Selecciona el canal de comunicacion
          </span>
          <></>
          <TextField></TextField>
          <TextField></TextField>
          <TextField></TextField>
          <TextField>Insertar token</TextField>
        </div>
      </CardContent>
    </Card>
  )
}

CardMessage.propTypes = {
  classes: PropTypes.object
}

CardMessage.muiName = 'CardMessage'

export default withStyles(styles, { name: 'CardMessage' })(CardMessage)
