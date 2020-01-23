import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
  Card, CardHeader, CardContent, TextField, Switch, Divider, Select, MenuItem, Typography
} from '@krowdy-ui/core'
import { Counter } from '@krowdy-ui/views'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

export const styles = () => ({
  card: {
    height: 'auto',
    width : 420
  },
  containerColumn: {
    display      : 'flex',
    flexDirection: 'column',
    marginBottom : 32
  },
  containerRow: {
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'row'
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

  const initialCounterValue = 10
  const min = 5
  const max = 15
  const [ number, setNumber ] = React.useState(initialCounterValue)

  const onChange = (event) => {
    setNumber(event)
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        title='1. Mensajeria' />
      <Divider />
      <CardContent>
        <div className={classes.containerColumn}>
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
          <div className={classes.containerRow}>
            <span>
              Termina en
            </span>
            <Counter
              addIcon={<AddIcon style={{ height: 18, width: 18 }} />}
              max={max}
              min={min}
              number={number}
              onChange={onChange}
              removeIcon={<RemoveIcon style={{ height: 18, width: 18 }} />}
              size='small' />
            <span>
              repeticiones
            </span>
          </div>
        </div>
        <div className={classes.containerColumn}>
          <div className={classes.containerRow}>
            <Typography className={classes.title}>
              Bloqueo de horarios
            </Typography >
            <Switch color='primary' size='small'>
            </Switch>
          </div>
          <div>
            <Typography>
              De
            </Typography>
          </div>
        </div>
        <div className={classes.containerColumn} >
          <span className={classes.title}>
            Selecciona el canal de comunicacion
          </span>
          <></>
          <TextField label='Remitente' placeholder='Remitente'></TextField>
          <TextField label='Asunto' placeholder='Asunto'></TextField>
          <TextField label='Mensaje' placeholder='Mensaje'></TextField>
          <Typography>Insertar token</Typography>
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
