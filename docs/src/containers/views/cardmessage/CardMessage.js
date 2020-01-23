import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
  Card, CardHeader, CardContent, TextField, Switch, Divider, Select, MenuItem, Typography, Input
} from '@krowdy-ui/core'
import { Counter } from '@krowdy-ui/views'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

export const styles = theme => ({
  card: {
    height: 'auto',
    width: 420
  },
  containerColumn: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 32
  },
  containerRow: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
  },
  input: {
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    textAlign: 'center'
  },
  root: {
    borderBottom: `1px solid ${theme.palette.grey['500']}`,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '100%',
    marginLeft: theme.spacing(1),
    textAlign: 'center',
    width: 36
  },
  selectDate: {
    margin: theme.spacing(0, 1)
  },
  text: {
    color: '#262626',
    fontSize: 14,
    fontWeight: 'normal'
  },
  title: {
    color: '#262626',
    fontSize: 14,
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
  const [number, setNumber] = React.useState(initialCounterValue)

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
          <div className={classes.text}>
            <span>Seguimiento cada</span>
            <Input
              classes={{
                input: classes.input,
                root: classes.root
              }}
              defaultValue='1'
              disableUnderline
              inputProps={{ max: '99', maxLength: 0, min: '1', step: '1' }}
              max='99'
              min='1'
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 2)
              }}
              type='number' />
            <Select className={classes.selectDate}>
              <MenuItem value={10} >Horas</MenuItem>
              <MenuItem value={20}>Dias</MenuItem>
            </Select>

          </div>
          <span style={{ margin: '10px 0px' }}>de inactividad después de ingresar a la etapa</span>
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
      </CardContent >
    </Card >
  )
}

CardMessage.propTypes = {
  classes: PropTypes.object
}

CardMessage.muiName = 'CardMessage'

export default withStyles(styles, { name: 'CardMessage' })(CardMessage)
