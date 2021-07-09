import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { Backdrop, Card, CardContent, IconButton, makeStyles } from '@krowdy-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import LoginSinglePage from '../LoginSinglePage'
import AuthContext from '../AuthContext'

const OnetapAuth = ({
  children,
  AuthContextProps
}) => {
  const classes = useStyles()
  const [ openBackdrop, setBackdrop ] = useState(false)

  const _handleCloseModal = useCallback(() => {
    setBackdrop(false)
  }, [])

  const _handleOpenModal = useCallback(() => {
    setBackdrop(true)
  }, [])

  return (
    <AuthContext
      {...AuthContextProps}
      stateContext={{
        onClose: _handleCloseModal,
        onOpen : _handleOpenModal
      }}>
      {children}
      {
        openBackdrop ?
          <Backdrop
            className={classes.container}
            onClose={_handleCloseModal}
            open>
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
                <LoginSinglePage />
              </CardContent>
            </Card>
          </Backdrop> : null
      }
    </AuthContext>
  )
}

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

OnetapAuth.propTypes = {
  AuthContextProps: PropTypes.shape({
    baseUrl     : PropTypes.string,
    clientId    : PropTypes.string,
    domain      : PropTypes.string,
    redirectUri : PropTypes.string,
    stateContext: PropTypes.any,
    theme       : PropTypes.any
  })
}

export default React.memo(OnetapAuth)
