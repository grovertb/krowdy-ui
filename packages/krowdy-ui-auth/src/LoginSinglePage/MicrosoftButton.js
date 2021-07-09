import React from 'react'
import MicrosoftLogin from 'react-microsoft-login'
import { makeStyles, Typography } from '@krowdy-ui/core'
import { IMAGES_SOCIAL } from './constants'
import { useAuth } from '../utils'

const useStyles = makeStyles(() => ({
  btnSocialMicrosoft: {
    '& img': {
      marginLeft : 5,
      marginRight: 15
    },
    '& span': {
      fontSize: '14px',
      margin  : 'auto'

    },
    '&:hover': {
      background: '#1b1b1b'
    },
    alignItems    : 'center',
    background    : '#000000',
    border        : 0,
    borderRadius  : '4px',
    color         : '#fff',
    cursor        : 'pointer',
    display       : 'flex',
    height        : '40px',
    justifyContent: 'center',
    margin        : '4px 0px',
    position      : 'relative',
    width         : '100%'
  }
}))

const Microsoft = () => {
  const classes = useStyles()
  const { microsoftCredentials: { clientId, redirectUri } = {}, validateSocialNetwork } = useAuth()

  const handleResponseMicrosoft = (err, response) => {
    if(err) {
      console.log(err)

      return
    }

    const { accessToken } = response

    validateSocialNetwork('microsoft', { clientId, tokenId: accessToken })
  }

  return (
    <MicrosoftLogin
      authCallback={handleResponseMicrosoft}
      clientId={clientId}
      redirectUri={redirectUri}>
      <button className={classes.btnSocialMicrosoft}>
        <img alt={'microsoftSocial'} src={IMAGES_SOCIAL.microsoft} />
        <Typography variant='body2'>Ingresa con Microsoft</Typography>
      </button>
    </MicrosoftLogin>
  )
}

export default Microsoft

