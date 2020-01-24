import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
  Card, CardHeader, CardContent, TextField, Switch, Divider, Select, MenuItem, Typography, Input, Box
} from '@krowdy-ui/core'
import { Counter } from '@krowdy-ui/views'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

export const styles = (theme) => ({
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
  input: {
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin              : 0
    },
    marginBottom: - 2,
    textAlign   : 'center'
  },
  root: {
    borderBottom: `1px solid ${theme.palette.grey['500']}`,
    color       : theme.palette.grey['700'],
    fontSize    : 14,
    fontStyle   : 'normal',
    fontWeight  : 'normal',
    lineHeight  : '100%',
    marginLeft  : theme.spacing(1),
    textAlign   : 'center',
    width       : 36
  },
  selectDate: {
    borderBottom : `1px solid ${theme.palette.grey['500']}`,
    color        : '#595959',
    fontSize     : 14,
    fontWeight   : 'normal',
    margin       : theme.spacing(0, 1),
    paddingBottom: 3,
    width        : 73
  },
  sender: {
    color     : '#595959',
    fontSize  : 14,
    fontWeight: 'normal',
    paddingTop: 0
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
  },
  underline: {
    '&::before': {
      borderBottom: '1px solid #D9D9D9'
    }
  }
})

const CardMessage = props => {
  const {
    classes
  } = props

  const initialCounterValue = 1
  const min = 1
  const max = 99
  const [ number, setNumber ] = React.useState(initialCounterValue)
  const [ countTime, setCountTime ] = React.useState(1)

  const data = Array(number).fill(
    <div className={classes.containerColumn}>
      <TextField
        inputProps={{
          className: classes.sender
        }}
        label='Asunto'
        placeholder='Asunto'></TextField>
      <TextField
        inputProps={{
          className: classes.sender
        }}
        label='Mensaje'
        placeholder='Mensaje'></TextField>
      <Typography>Insertar token</Typography>
    </div>
  )
  const onChange = (event) => {
    setNumber(event)
  }
  function addLeadingZero(number) {
    return ('0' + number).slice(-2)
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        title='1. Mensajeria' />
      <Divider />
      <CardContent>
        <Box className={classes.containerColumn}>
          <Typography className={classes.title}>
            Selecciona la frecuencia del mensaje
          </Typography>
          <Box className={classes.containerRow} >
            <Typography className={classes.text}>Seguimiento cada</Typography>
            <Input
              classes={{
                input: classes.input,
                root : classes.root
              }}
              defaultValue='1'
              disableUnderline
              // error={countTime === '' ? true : false}
              inputProps={{ max: '99', min: '1', step: '1' }}
              onChange={(e) => {
                setCountTime(e.target.value)
              }}
              onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 2)
              }}
              type='number'
              value={addLeadingZero(countTime)} />
            <Select
              classes={{
                root: classes.selectDate
              }}
              disableUnderline>
              <MenuItem defaultValue value={10} >{countTime > 1 ? 'Horas' : 'Hora'}</MenuItem>
              <MenuItem value={20}>{countTime > 1 ? 'Dias' : 'Dia'}</MenuItem>
            </Select>
          </Box>
          <Typography className={classes.text} style={{ margin: '10px 0px' }}>de inactividad después de ingresar a la etapa</Typography>
          <Box className={classes.containerRow}>
            <Typography className={classes.text}>
              Termina en
            </Typography>
            <Counter
              addIcon={<AddIcon style={{ height: 18, width: 18 }} />}
              max={max}
              min={min}
              number={number}
              onChange={onChange}
              removeIcon={<RemoveIcon style={{ height: 18, width: 18 }} />}
              size='small' />
            <Typography className={classes.text}>
              repeticiones
            </Typography>
          </Box>
        </Box>
        <Box className={classes.containerColumn}>
          <Box className={classes.containerRow}>
            <Typography className={classes.title}>
              Bloqueo de horarios
            </Typography >
            <Switch color='primary' size='small'>
            </Switch>
          </Box>
          <Box>
            <Typography className={classes.text}>
              De ______________ a __________________
            </Typography>
          </Box>
        </Box>
        <Box className={classes.containerColumn}>
          <Typography className={classes.title}>
            Selecciona el canal de comunicacion
          </Typography>
          <Box>
            {/* <RadioForm
              inputs={inputsRadios}
              isRow
              value='value2' /> */}
          </Box>
        </Box>
        <Box className={classes.containerColumn}>
          <TextField
            inputProps={{
              className: classes.sender
            }}
            label='Remitente'
            placeholder='Carola Diaz - carola@krowdy.com'></TextField>

        </Box>
        <Box className={classes.containerColumn} >
          {data.map((value) => value)}
        </Box>
      </CardContent >
    </Card >
  )
}

CardMessage.propTypes = {
  classes: PropTypes.object
}

CardMessage.muiName = 'CardMessage'

export default withStyles(styles, { name: 'CardMessage' })(CardMessage)
