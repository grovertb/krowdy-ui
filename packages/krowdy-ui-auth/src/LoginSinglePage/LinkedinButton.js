import React, { useCallback } from 'react'
import { LinkedIn } from 'react-linkedin-login-oauth2'
import { makeStyles, Button, Typography } from '@krowdy-ui/core'
import { IMAGES_SOCIAL } from './constants'
import { useAuth } from '../utils'

const Linkedin = () => {
  const classes = useStyles()
  const { linkedinCredentials = {}, validateSocialNetwork } = useAuth()

  const _handleSuccess = useCallback((response)=>{
    if(response && response.tokenId) {
      const { tokenId } = response
      validateSocialNetwork('linkedin', { tokenId } )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ validateSocialNetwork, linkedinCredentials ])

  return (
    linkedinCredentials && linkedinCredentials.clientId ?
      <LinkedIn
        clientId={linkedinCredentials.clientId}
        onFailure={() => {}}
        onSuccess={_handleSuccess}
        redirectUri={linkedinCredentials.redirectUri}
        renderElement={(props)=>(
          <Button
            {...props}
            className={classes.linkedinButton}
            variant='contained'>
            <img
              alt='Log in with Linked In'
              className={classes.iconLinkedin}
              src={IMAGES_SOCIAL['linkedin']} />
            <Typography variant='body2'>
          Ingresa con LinkedIn
            </Typography>
          </Button>
        )}
        scope={linkedinCredentials.scope || 'r_liteprofile r_emailaddress w_member_social'}
        state={linkedinCredentials.state ||'34232423'} /> : null
  )
}

const useStyles = makeStyles(({ spacing, palette }) => ({
  iconLinkedin: {
    marginRight: spacing(1.5),
    marginTop  : spacing(-.75)
  },
  linkedinButton: {
    // color de boton de linkedin
    '&:hover': {
      background: '#007AB9'
    },
    alignItems    : 'center',
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
