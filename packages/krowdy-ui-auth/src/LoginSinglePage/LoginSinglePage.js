import React, { useState } from 'react'
import { Button, makeStyles, Typography, useTheme } from '@krowdy-ui/core'
import { ArrowBackIos as ArrowBackIosIcon } from '@material-ui/icons'
import GoogleButton from './GoogleButton'
import Linkedin from './Linkedin'
import KrowdyOneTap from './KrowdyOneTap'
import Footer from './Footer'

const IMAGES = {
  krowdy: '//cdn.krowdy.com/media/images/KrowdyLogo2.svg'
}

const getTitleByView = (type, text) => {
  switch (type) {
    case 'main':
      return '¡Te damos la bienvenida!'
    case 'login':
      return 'Ingresa tu correo o  celular '
    case 'password':
      return `Ingresa tu contraseña para ${text}`
    case 'register':
      return '¿Cómo te llamas?'
    case 'verify':
      return 'Verificación de cuenta'
    case 'recovery':
      return 'Restablecer contraseña'
    case 'custom ':
      return String(text)
    default:
      return ''
  }
}

const OnetapBody = () => {
  const classes = useStyles()
  const { template:{ header:{ logo } = {} } = {} } = useTheme()
  const [ prevView, setPrevView ] = useState('')
  const [ typeView, setTypeView ] = useState('main')
  const [ currentUser, setCurrentUser ] = useState('')

  const _handleChangeView = (view) => () => {
    setPrevView(typeView)
    setTypeView(view)
  }

  const _handleCurrentUser = (text) => {
    setCurrentUser(text)
  }

  return (
    <div>
      {
        typeView !== 'main' ? (
          <Button
            className={classes.buttonBack}
            onClick={_handleChangeView(prevView)}
            startIcon={<ArrowBackIosIcon fontSize='small' />}>
          Atrás
          </Button>
        ) : null
      }
      <div className={classes.imageContainer}>
        <a className={classes.headerImage} href={'http://'}>
          <img alt='abeja-img' height='100%'  src={logo?.source || IMAGES['krowdy']} />
        </a>
        <Typography className={classes.titleCenter} variant='h5'>
          {getTitleByView(typeView, currentUser)}
        </Typography>
      </div>
      {
        [ 'recovery', 'verify' ].includes(typeView) ? (
          currentUser.indexOf('@') !== -1 ? (
            <Typography className={classes.titleCenter}>
              Te enviamos un código a <strong>{currentUser}</strong>. Recuerda revisar tu carpeta Spam o Notificaciones.
            </Typography>
          ) : (
            <Typography className={classes.titleCenter}>
              Te enviamos un código por SMS a tu celular <strong>{currentUser}</strong>.
            </Typography>
          )
        ) : typeView === 'register' ? (
          <Typography className={classes.titleCenter}>
           Asociaremos este nombre con {currentUser}.
          </Typography>
        ) :  null
      }
      <div className={classes.bodyContainer}>
        {
          typeView === 'main' ? (
            <>
              <GoogleButton
                setAuthStatus={() => {}}
                signupBarba={() => {}}
                typeEventView={''}
                urlCallback={''}
                urlRedirect={''} />
              <Linkedin
                setAuthStatus={() => {}}
                signupBarba={() => {}}
                typeEventView={''}
                urlCallback={''}
                urlRedirect={''} />
              <Button
                className={classes.buttonKrowdy}
                color='primary'
                fullWidth
                onClick={_handleChangeView('login')}
                variant='outlined' >
              Ingresa con otro correo o celular
              </Button>
            </>
          ) : (
            <KrowdyOneTap
              currentUser={currentUser}
              onChangeUserLogin={_handleCurrentUser}
              onChangeView={_handleChangeView}
              typeView={typeView} />
          )
        }
      </div>
      <Footer typeView={typeView} />
    </div>
  )
}

const useStyles = makeStyles(({ spacing }) => ({
  bodyContainer: {
    padding: spacing(4, 0)
  },
  buttonBack: {
    left    : 12,
    position: 'absolute',
    top     : 12
  },
  buttonKrowdy: {
    marginTop: spacing(3)
  },
  headerImage: {
    marginBottom: spacing(3.5),
    maxHeight   : 50
  },
  imageContainer: {
    alignItems    : 'center',
    display       : 'flex',
    flexDirection : 'column',
    justifyContent: 'center'
  },
  titleCenter: {
    marginTop: spacing(1.5),
    textAlign: 'center'

  }
}), { name: 'OnetapBody' })

export default React.memo(OnetapBody)
