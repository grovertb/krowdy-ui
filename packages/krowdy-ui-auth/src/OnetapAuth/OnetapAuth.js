import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {  Backdrop, Card, CardContent, IconButton, makeStyles } from '@krowdy-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import OnetapBody from '../LoginSinglePage'
import AuthContext from '../AuthContext'

const useStyles = makeStyles(({ zIndex, spacing, breakpoints }) => ({
  cardContent: {
    padding               : spacing(8, 1.5),
    [breakpoints.up('md')]: {
      '&:last-child': {
        paddingBottom: spacing(4)
      },
      padding: spacing(8, 12)
    }
  },
  closeButton: {
    position: 'absolute',
    right   : 12,
    top     : 12
  },
  closeIcon: {
    position: 'absolute',
    right   : 4,
    top     : 4
  },
  container: {
    height  : '100vh',
    left    : 0,
    position: 'fixed',
    top     : 0,
    width   : '100vw',
    zIndex  : zIndex.modal + 1
  },
  containerWithoutBorder: {
    boxShadow: 'none',
    maxWidth : 576
  },
  iframe: {
    border : 'none',
    height : '100%',
    outline: 'hidden',
    width  : '100%'
  },
  mainContainer: {
    maxWidth                   : 576,
    position                   : 'relative',
    [breakpoints.down('767px')]: {
      height  : '100%',
      overflow: 'auto'
    }
  }
}), { name: 'OnetapAuth' })

// const redirectToExternal = (accountUrl, externalView) => {
//   const urlAuth = `${accountUrl}/${externalView}`
//   const urlRedirect = window.location.href
//   const urlCallback = `${window.location.origin}/callback`
//   const urlToRegister = `${urlAuth}?urlRedirect=${urlRedirect}&urlCallback=${urlCallback}`
//   window.open(urlToRegister, 'Recuperar contraseña', 'width=500, height=500')

//   return
// }

// const useToggleAuthModal = () => {
//   const [ open, setOpen ] = useState(false)

//   return []
// }

const OnetapAuth = ({
  // onAfterLogin = () => {},
  // variant = 'localStorage',
  // accountUrl,
  children,
  AuthContextProps
}) => {
  const classes = useStyles()
  const [ openBackdrop, setBackdrop ] = useState(false)
  // const [client] = useState(
  //   () => new Auth0Client(toAuth0ClientOptions(clientOpts))
  // )

  // const loginService = useCallback((userInfo) => {
  //   const {
  //     success,
  //     accessToken,
  //     refreshToken,
  //     iduser
  //   } = userInfo

  //   if(success) {
  //     if(variant === 'localStorage' ) {
  //       localStorage.setItem('accessToken', accessToken)
  //       localStorage.setItem('iduser', iduser)
  //       localStorage.setItem('refreshToken', refreshToken)
  //     }

  //     onAfterLogin(userInfo)
  //   }
  // }, [ onAfterLogin, variant ])

  // const resolveMessage = useCallback(({ data }) => {
  //   const { event_id, userInfo } = data
  //   console.log('🚀 ~ file: OnetapAuth.js ~ line 93 ~ resolveMessage ~ event_id', event_id)

  //   if(event_id === 'googleOneTapClosed')
  //     setIsOnetapGoogle(false)

  //   if(event_id === 'anotherViewAction')
  //     setRegister(false)

  //   if(event_id === 'onetabSyncRegister')
  //     setRegister(true)

  //   if(event_id === 'authStatus') {
  //     setRegister(false)
  //     loginService(userInfo)
  //   }

  //   if(event_id === 'onetabSync') {
  //     setRegister(false)
  //     loginService(userInfo)
  //   }

  //   if(event_id === 'onetabSyncRememberSession')
  //     redirectToExternal(accountUrl, 'usernamerecovery')

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // useEffect(() => {
  //   const mesageListener = window.addEventListener('message', resolveMessage)

  //   return () => window.removeEventListener(mesageListener)
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const _handleCloseModal = () => {
    setBackdrop(false)
  }
  const _handleOpenModal = () => {
    setBackdrop(true)
  }

  return (
    <AuthContext
      {...AuthContextProps}
      stateContext={{
        onClose: _handleCloseModal,
        onOpen : _handleOpenModal
      }}>
      {children}
      <Backdrop
        className={classes.container}
        onClose={_handleCloseModal}
        open={openBackdrop}>
        <Card className={classes.mainContainer}>
          <IconButton
            className={classes.closeButton}
            onClick={_handleCloseModal}
            size='small'>
            <CloseIcon
              color='disabled'
              fontSize='small' />
          </IconButton>
          <CardContent className={classes.cardContent}>
            <OnetapBody />
          </CardContent>
        </Card>
      </Backdrop>
    </AuthContext >
  )
}

OnetapAuth.propTypes = {
  AuthContextProps: PropTypes.shape({
    baseUrl     : PropTypes.string,
    clientId    : PropTypes.string,
    domain      : PropTypes.string,
    redirectUri : PropTypes.string,
    stateContext: PropTypes.any
  })
}

export default React.memo(OnetapAuth)
