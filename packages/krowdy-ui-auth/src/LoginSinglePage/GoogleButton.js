import React from 'react'
import GoogleLogin from 'react-google-login'
import { makeStyles, Button, Typography } from '@krowdy-ui/core'
import { IMAGES_SOCIAL } from './constants'
import { useAuth } from '../utils'

const responseGoogle = (response) => {
  console.log('Failure response ->', response)
}

const GoogleButton = () => {
  const classes = useStyles()
  const { googleCredentials = {} }=useAuth()

  return (
    googleCredentials && googleCredentials.clientId ?
      <GoogleLogin
        clientId={googleCredentials.clientId}
        cookiePolicy={'single_host_origin'}
        onFailure={responseGoogle}
        onSuccess={()=>{}}
        render={(props) => (
          <Button
            {...props}
            className={classes.googleButton}>
            <img
              alt={'googleSocial'}
              className={classes.iconGoogle}
              src={IMAGES_SOCIAL['google']} />
            <Typography variant='body2'>
        Ingresa con Google
            </Typography>
          </Button>
        )} /> :
      null
  )
}

const useStyles = makeStyles(({ spacing, palette }) => ({
  googleButton: {
    '&:hover': {
      background: '#4285F4'
    },
    alignItems    : 'center',
    background    : '#4285F4',
    borderRadius  : spacing(.5),
    // color de boton de google
    color         : palette.common.white,
    display       : 'flex',
    flex          : 1,
    height        : 40,
    justifyContent: 'center',
    width         : '100%'
  },
  iconGoogle: {
    marginRight: spacing(2),
    marginTop  : spacing(-.5)
  }
}), { name: 'GoogleButton' })

export default React.memo(GoogleButton)

