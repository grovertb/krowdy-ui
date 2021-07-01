import React, { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import {
  Button,
  Checkbox,
  makeStyles,
  TextField,
  FormControlLabel,
  IconButton,
  Typography
} from '@krowdy-ui/core'
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon
} from '@material-ui/icons'
import GoogleButton from '../GoogleButton'
// import { useVerifyPassword } from '../../../hooks/authentication'

const inputLabels = {
  login   : 'Correo o celular',
  password: 'Contraseña',
  verify  : 'Código de verificación'
}

const errorMessages = {
  newPassword: 'Debe tener mínimo 8 caracteres.',
  password   : 'Contraseña incorrecta. Vuelve a intentarlo o haz click en “¿Olvidaste tu contraseña?”',
  verify     : 'Código de verificación erróneo.'
}

const hasPassword = false
const isFirstTime = true

const KrowdyOneTap = ({
  onChangeUserLogin = () => {},
  onChangeView = () => {},
  typeView,
  currentUser
}) => {
  const classes = useStyles()
  const [ loginkey, setLoginKey ] = useState(null)
  const [ valueInput, setValueInput ] = useState(typeView === 'login' ? currentUser : '')
  const [ isErrorLogin, setErrorLogin ] = useState(false)
  const [ showPassword, setShowPassword ] = useState(false)
  const [ activeSession, setActiveSession ] = useState(true)
  const [ register, setRegister ] = useState({})
  const [ verifyPasswordOrCode ] = [ ()=>{} ]

  const isNextDisabled = useMemo(() => {
    if(typeView === 'register') {
      const { name, lastName } = register

      return !(name && lastName)
    } else {
      return !valueInput
    }
  }, [ typeView, valueInput, register ])

  useEffect(() => {
    if(valueInput) {
      const res = valueInput.split(new RegExp('[ @ | . ]'))

      const [ , domain ] = res

      if(domain && 'gmail'.indexOf(domain) !== -1)
        setLoginKey('google')
      else
        setLoginKey(null)
    }
  }, [ valueInput ])

  const _handleChangeInput = ({ target:{ value } }) => {
    setValueInput(value)
  }

  const _handleChangeRegister = ({ target:{ value, name } }) => {
    setRegister(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const _handleNext = () => {
    switch (typeView) {
      case 'login':
        onChangeUserLogin(valueInput)
        onChangeView(hasPassword ? 'password' : 'verify')()
        setValueInput('')
        setLoginKey(null)
        break
      case 'password':
        const isPasswordValid = verifyPasswordOrCode(valueInput)
        setErrorLogin(isPasswordValid)
        if(isPasswordValid)
          onChangeView('success')()
        break
      case 'verify':

        const isCodeValid = verifyPasswordOrCode(valueInput)
        setErrorLogin(!isCodeValid)
        if(isCodeValid)
          onChangeView(isFirstTime ? 'register' : 'success')()
        break
      case 'register':
        console.log('register', register)
        break
      default:
        break
    }
  }

  const _handleClickShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  const _handleActiveSession = () => {
    setActiveSession(prev => !prev)
  }

  return (
    <>
      {/* LOGIN */}
      {
        [ 'password', 'verify', 'recovery', 'newPassword' ].includes(typeView) ? (
          <TextField
            error={isErrorLogin}
            FormHelperTextProps={{
              classes: {
                contained: classes.helperText
              }
            }}
            // disabled={loadingValidIntegrations}
            fullWidth
            helperText={isErrorLogin || typeView === 'recovery' ? errorMessages[typeView] : null}
            InputProps={{
              className: classes.inputStyle,
              classes  : {
                input: classes.emailInput,
                root : clsx({
                  [classes.colorError]: isErrorLogin
                })
              },
              endAdornment: (
                typeView === 'password' ?
                  <IconButton
                    className={classes.iconShowPassword}
                    onClick={_handleClickShowPassword}
                    size='small'>
                    { showPassword ?
                      <VisibilityIcon color={'inherit'} fontSize={'inherit'} /> :
                      <VisibilityOffIcon color={'inherit'} fontSize={'inherit'} />
                    }
                  </IconButton> : null
              )
            }}
            onChange={_handleChangeInput}
            placeholder={'Contraseña'}
            type={showPassword || [ 'verify', 'recovery' ].includes(typeView) ? 'text' : 'password'}
            value={valueInput}
            variant='outlined' />
        ) : typeView === 'login' ? (
          <TextField
            className={classes.fieldEmail}
            fullWidth
            InputLabelProps={{
              classes: {
                root: classes.labelOutlined
              }
            }}
            InputProps={{
              classes: {
                input: classes.emailInput,
                root : classes.textfield
              }
            }}
            label={inputLabels[typeView]}
            onChange={_handleChangeInput}
            value={valueInput}
            variant='outlined' />
        ) : null
      }

      {/* REGISTRO */}
      {
        typeView === 'register' ? (
          <> <TextField
            className={classes.fieldEmail}
            fullWidth
            InputLabelProps={{
              classes: {
                root: classes.labelOutlined
              }
            }}
            InputProps={{
              classes: {
                input: classes.emailInput,
                root : classes.textfield
              }
            }}
            label={'Nombre'}
            name={'name'}
            onChange={_handleChangeRegister}
            value={register?.name || ''}
            variant='outlined' />
          <TextField
            className={classes.fieldEmail}
            fullWidth
            InputLabelProps={{
              classes: {
                root: classes.labelOutlined
              }
            }}
            InputProps={{
              classes: {
                input: classes.emailInput,
                root : classes.textfield
              }
            }}
            label={'Apellidos'}
            name={'lastName'}
            onChange={_handleChangeRegister}
            value={register?.lastName || ''}
            variant='outlined' />
          </>
        ) : null
      }

      {/* VERIFICA DOMINIO DE EMAIL LOGIN Y MUESTRA BOTON EN CASO SEA GOOGLE */}
      {
        loginkey === 'google' ? (
          <GoogleButton
            setAuthStatus={() => {}}
            signupBarba={() => {}}
            typeEventView={''}
            urlCallback={''}
            urlRedirect={''} />
        ) : null
      }

      {/* CHECKBOX PARA MANTENER SESION ABIERTA */}
      {
        [ 'password', 'verify' ].includes(typeView) ? (
          <FormControlLabel
            className={classes.labelCheckbox}
            control={<Checkbox
              checked={activeSession}
              color='primary'
              onChange={_handleActiveSession} />}
            label='Mantener mi sesión abierta' />

        ) : null
      }

      <Button
        className={classes.nextButton}
        color='primary'
        disabled={isNextDisabled}
        fullWidth
        onClick={_handleNext}
        variant='contained' >
      Continuar
      </Button>

      {
        [ 'password', 'verify', 'recovery' ].includes(typeView) ? (
          <div className={classes.endContent}>
            {
              typeView === 'password' ?
                <Button
                  color='primary'
                  size='small'>
                 ¿Olvidaste tu contraseña?
                </Button> :
                <>
                  <Typography
                    className={clsx(classes.textfield, classes.textEnd)}
                    color='disabled'>
                ¿No lo encuentras?
                  </Typography>
                  <Button
                    className={classes.capitalizeText}
                    color='primary'
                    size='small'>
                   Reenviar
                  </Button>
                </>
            }
          </div>
        ) : null
      }
    </>
  )
}

const useStyles = makeStyles(({ spacing, palette }) => ({
  capitalizeText: {
    textTransform: 'capitalize'
  },
  colorError: {
    color: palette.error.main
  },
  emailInput: {
    color  : palette.common.black,
    // fontSize: 14,
    padding: spacing(1.5)
  },
  endContent: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'center',
    marginTop     : spacing(3)
  },
  fieldEmail: {
    marginBottom: spacing(2.5)
  },
  helperText: {
    marginLeft: 0
  },
  inputStyle: {
    fontSize: 14
  },
  labelCheckbox: {
    '& > span': {
      fontSize: 14,
      padding : spacing(1, 1, 1, 0)
    },
    margin: spacing(2, 0, 3, 0)
  },
  labelOutlined: {
    transform: 'translate(14px, 14px)'
  },
  nextButton: {
    marginTop: spacing(1)
  },
  textEnd: {
    color: palette.grey[600]
  },
  textfield: {
    fontSize: 14
  }
}), { name: 'KrowdyOneTap' })

export default KrowdyOneTap
