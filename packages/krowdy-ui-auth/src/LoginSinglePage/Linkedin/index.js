import React from 'react'
import { makeStyles } from '@krowdy-ui/core'
import { LinkedIn } from 'react-linkedin-login-oauth2'
import { IMAGES_SOCIAL } from '../constants'

// const { REACT_APP_KEY_SERVICE_LINKEDIN: keyLinkedin } = process.env
const cdnLink = 'https://cdn.krowdy.com/auth'
const iconLinkedin = IMAGES_SOCIAL(cdnLink, 'linkedin')
const uriRedirect = `${window.location.origin}/login`
const Linkedin = () => {
  // const isMobile = useMediaQuery(theme.breakpoints.down(324))
  const classes = useStyles()

  return (
    <LinkedIn
      className={classes.btnLnkLogin}
      clientId={''}
      onFailure={() => {}}
      onSuccess={() => {}}
      redirectUri={uriRedirect}
      scope='r_liteprofile r_emailaddress w_member_social'
      state='34232423'
      style={{
        background: '#007AB9'
      }}>
      <img
        alt='Log in with Linked In'
        src={iconLinkedin} />
      Ingresa con LinkedIn
    </LinkedIn>
  )
}

const useStyles = makeStyles(() => ({
  btnLnkLogin: {
    '& img': {
      marginRight: 12,
      top        : 12
    },
    '& span': {
      fontSize: '14px',
      margin  : 'auto'
    },
    '&:hover': {
      background: '#3785C1'
    },
    background   : '#007AB9',
    border       : 0,
    borderRadius : '4px',
    color        : '#fff',
    cursor       : 'pointer',
    fontFamily   : 'roboto',
    fontSize     : '14px',
    fontWeight   : '500',
    height       : '40px',
    margin       : '4px 0px',
    position     : 'relative',
    textTransform: 'inherit',
    width        : '100%'
  }
}), { name: 'Linkedin' })

export default Linkedin
