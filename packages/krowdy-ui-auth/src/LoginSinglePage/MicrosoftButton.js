import React, { useCallback } from 'react'
import MicrosoftLogin from 'react-microsoft-login'
import { makeStyles, Typography } from '@krowdy-ui/core'
import { IMAGES_SOCIAL } from './constants'
import { useAuth } from '../utils'

const useStyles = makeStyles(({ spacing, shape, palette }) => ({
  btnSocialMicrosoft: {
    '& img': {
      marginLeft : spacing(.75),
      marginRight: spacing(2)
    },
    '& span': {
      fontSize: 14,
      margin  : 'auto'
    },
    '&:hover': {
      background: '#1b1b1b'
    },
    alignItems    : 'center',
    background    : palette.common.black,
    border        : 0,
    borderRadius  : shape.borderRadius,
    color         : palette.common.white,
    cursor        : 'pointer',
    display       : 'flex',
    height        : 40,
    justifyContent: 'center',
    marginTop     : spacing(2),
    position      : 'relative',
    width         : '100%'
  }
}))

const MicrosoftButton = () => {
  const classes = useStyles()
  const {
    microsoftCredentials: { clientId, redirectUri } = {},
    validateSocialNetwork,
    onMsalInstanceChange
  } = useAuth()

  const handleResponseMicrosoft = useCallback((err, response, msal) => {
    if(err) {
      console.log(err)

      return
    }

    const { accessToken } = response

    onMsalInstanceChange(msal)
    validateSocialNetwork('microsoft', { tokenId: accessToken })
  }, [ validateSocialNetwork, onMsalInstanceChange ])

  return (
    <MicrosoftLogin
      authCallback={handleResponseMicrosoft}
      clientId={clientId}
      redirectUri={redirectUri}>
      <button className={classes.btnSocialMicrosoft}>
        <img alt='microsoftSocial' src={IMAGES_SOCIAL.microsoft} />
        <Typography variant='body2'>Ingresa con Microsoft</Typography>
      </button>
    </MicrosoftLogin>
  )
}

export default MicrosoftButton

