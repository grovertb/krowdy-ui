import React, { useCallback } from 'react'
import FacebookLogin from 'react-facebook-login'
import { IMAGES_SOCIAL } from './constants'
import { makeStyles } from '@krowdy-ui/core'
import { useAuth } from '../utils'

const FacebookButton = () => {
  const classes = useStyles()

  const { facebookCredentials : { clientId } = {}, validateSocialNetwork } = useAuth()

  const _handleSuccess = useCallback((response)=>{
    if(response && response.accessToken) {
      const { accessToken : tokenId } = response
      validateSocialNetwork('facebook', { tokenId } )
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ validateSocialNetwork ])

  return (
    clientId ?
      <FacebookLogin
        appId={clientId}
        callback={_handleSuccess}
        cssClass={classes.buttonFb}
        fields='name,email,picture'
        icon={<img alt='facebookSocial' className={classes.icon} src={IMAGES_SOCIAL['facebook']} />}
        textButton='Ingresa con Facebook' /> : null
  )
}

const useStyles = makeStyles(({ spacing, palette })=>({
  buttonFb: {
    '&:hover': {
      background: '#4A6BB3'
    },
    background  : '#4A6BB3',
    border      : 'none',
    borderRadius: spacing(.5),
    color       : palette.common.white,
    cursor      : 'pointer',
    fontSize    : 14,
    height      : 40,
    marginTop   : spacing(2),
    width       : '100%'
  },
  icon: {
    marginRight: spacing(2)
  }
}), { name: 'FacebookButton' })

export default React.memo(FacebookButton)
