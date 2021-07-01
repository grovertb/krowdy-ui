import React from 'react'
import { makeStyles, Button, Typography } from '@krowdy-ui/core'
import { LinkedIn } from 'react-linkedin-login-oauth2'
import { IMAGES_SOCIAL } from './constants'

const uriRedirect = `${window.location.origin}/login`

const Linkedin = () => {
  // const isMobile = useMediaQuery(theme.breakpoints.down(324))
  const classes = useStyles()

  return (
    <LinkedIn
      clientId={''}
      onFailure={() => {}}
      onSuccess={() => {}}
      redirectUri={uriRedirect}
      renderElement={()=>(
        <Button className={classes.linkedinButton} variant='contained'>
          <img
            alt='Log in with Linked In'
            className={classes.iconLinkedin}
            src={IMAGES_SOCIAL['linkedin']} />
          <Typography variant='body2'>
          Ingresa con LinkedIn
          </Typography>
        </Button>
      )}
      scope='r_liteprofile r_emailaddress w_member_social'
      state='34232423' />
  )
}

const useStyles = makeStyles(({ spacing, palette }) => ({
  iconLinkedin: {
    marginRight: spacing(1.5),
    marginTop  : spacing(-.75)
  },
  linkedinButton: {
    alignItems    : 'center',
    // color de boton de linkedin
    background    : '#007AB9',
    borderRadius  : spacing(.5),
    color         : palette.common.white,
    display       : 'flex',
    flex          : 1,
    height        : 40,
    justifyContent: 'center',
    marginTop     : spacing(2),
    width         : '100%'
  }
}), { name: 'Linkedin' })

export default React.memo(Linkedin)
