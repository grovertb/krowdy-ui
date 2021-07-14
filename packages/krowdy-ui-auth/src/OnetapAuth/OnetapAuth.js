import React from 'react'
import { Backdrop, Card, CardContent, IconButton, makeStyles } from '@krowdy-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'
import LoginSinglePage from '../LoginSinglePage'
import { useAuth } from '../utils'

const OnetapAuth = () => {
  const classes = useStyles()
  const { onClose } = useAuth() || {}

  return (
    <Backdrop
      className={classes.container}
      onClose={onClose}
      open>
      <Card className={classes.mainContainer}>
        <IconButton
          className={classes.closeButton}
          onClick={onClose}
          size='small'>
          <CloseIcon
            color='disabled'
            fontSize='small' />
        </IconButton>
        <CardContent className={classes.cardContent}>
          <LoginSinglePage />
        </CardContent>
      </Card>
    </Backdrop>
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

export default React.memo(OnetapAuth)
