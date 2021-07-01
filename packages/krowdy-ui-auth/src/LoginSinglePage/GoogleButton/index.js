import React from 'react'
import GoogleLogin from 'react-google-login'
import { makeStyles, Button, Typography } from '@krowdy-ui/core'
import { IMAGES_SOCIAL } from '../constants'

const responseGoogle = (response) => {
  console.log('Failure response ->', response)
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

const GoogleButton = () => {
  const classes = useStyles()

  return (
    <GoogleLogin
      // className={classes.btnSocialGoogle}
      clientId={''}
      cookiePolicy={'single_host_origin'}
      onFailure={responseGoogle}
      onSuccess={()=>{}}
      /* {!isMobile ? 'Ingresa con Google' : undefined} */
      render={() => (
        <Button
        // onClick={renderProps.onClick}
        // disabled={renderProps.disabled}
          className={classes.googleButton}>
          <img
            alt={'googleSocial'}
            className={classes.iconGoogle}
            src={IMAGES_SOCIAL['google']} />
          <Typography variant='body2'>
        Ingresa con Google
          </Typography>
        </Button>
      )} />
  )
}

export default GoogleButton

