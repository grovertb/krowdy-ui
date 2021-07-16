import React, { useCallback, useState } from 'react'
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

  const [ verifying, setVerifying ] = useState(false)

  const handleResponseMicrosoft = useCallback((err, response, msal) => {
    if(err) {
      setVerifying(false)
      console.log(err)

      return
    }

    if(response && msal && !verifying) {
      const { accessToken } = response

      setVerifying(true)
      onMsalInstanceChange(msal)
      validateSocialNetwork('microsoft', { tokenId: accessToken })
    }
  }, [ onMsalInstanceChange, validateSocialNetwork, verifying ])

  return (
    <MicrosoftLogin
      authCallback={handleResponseMicrosoft}
      clientId={clientId}
      forceRedirectStrategy
      redirectUri={redirectUri}>
      <button className={classes.btnSocialMicrosoft}>
        <img alt='microsoftSocial' src={IMAGES_SOCIAL.microsoft} />
        <Typography variant='body2'>Ingresa con Microsoft</Typography>
      </button>
    </MicrosoftLogin>
  )
}

export default MicrosoftButton

