import React from 'react'
import GoogleLogin from 'react-google-login'
import { makeStyles } from '@krowdy-ui/core'
// import { SIGNIN } from '../../../datalayer/Accounts'
import { IMAGES_SOCIAL } from '../constants'

// const signin = new SIGNIN()

// const { REACT_APP_KEY_SERVICE_GOOGLE: googleKey } = process.env

const responseGoogle = (response) => {
  console.log('Failure response ->', response)
}

const useStyles = makeStyles(() => ({
  btnSocialGoogle: {
    '& img': {
      marginRight: 12
    },
    '& span': {
      fontSize: 14,
      margin  : 'auto'
    },
    '&:hover': {
      background: '#40A9FF !important'
    },
    background  : '#4285F4 !important',
    border      : 0,
    borderRadius: '4px !important',
    boxShadow   : 'none !important',
    color       : '#fff !important',
    cursor      : 'pointer',
    fontFamily  : 'roboto !important',
    fontWeight  : '500 !important',
    height      : 40,
    margin      : '4px 0px',
    width       : '100%'
  },
  btnSocialGoogleShort: {
    background  : '#4285F4 !important',
    border      : 0,
    borderRadius: '4px !important',
    cursor      : 'pointer',
    display     : 'block !important',
    fontFamily  : 'roboto !important',
    fontSize    : '14px',
    fontWeight  : '500 !important',
    height      : 40,
    margin      : '4px 0px'
    // width       : 128
  }
}), { name: 'GoogleButton' })

const cdnLink = 'https://cdn.krowdy.com/auth'

const GoogleButton = () => {
  const classes = useStyles()
  // const theme = useTheme()
  // const isMobile = useMediaQuery(theme.breakpoints.down(324))

  // const validateSocialNetwork = (
  //   id_token,
  //   network,
  //   { email:emailUser }) => {
  //   const {
  //     setAuthStatus
  //   } = props
  //   signin
  //     .loginSocialNetworkAndCheckIfRegister({ emailUser, id_token, network }, 'onetap')
  //     .then(async res => {
  //       if(res && res.data && res.data.statusCode === 503)
  //         return setAuthStatus({ authenticate: false, method: 'google', socialError: 'Token' })

  //       const {
  //         data:{
  //           success = false
  //         } = {},
  //         userRegistration
  //       } = res

  //       if(!success)
  //         return setAuthStatus({ authenticate: false, method: 'google', socialError: 'Token' })

  //       if(res.data.refreshToken && res.data.accessToken && res.data.userId) {
  //         localStorage.setItem('refreshToken', res.data.refreshToken)
  //         localStorage.setItem('accessToken', res.data.accessToken)
  //         localStorage.setItem('iduser', res.data.userId)

  //         return setAuthStatus({ authenticate: true, method: 'google', userRegistration })
  //       } else {
  //         return setAuthStatus({ authenticate: false, method: 'google', socialError: 'Token' })
  //       }
  //     })
  //     .catch((error) => setAuthStatus({ authenticate: false, error, method: 'google', socialError: 'Token' }))
  // }
  // const handleResponseGoogle = response => {
  //   if(response.profileObj) {
  //     const {
  //       profileObj = {},
  //       tokenObj: { id_token }
  //     } = response
  //     validateSocialNetwork(id_token, 'google', profileObj)
  //   }
  // }

  return (
    <GoogleLogin
      // buttonText={'Iniciar con Google'}
      className={classes.btnSocialGoogle}
      clientId={''}
      cookiePolicy={'single_host_origin'}
      icon={false}
      onFailure={responseGoogle}
      onSuccess={()=>{}}>
      <img
        alt={'googleSocial'}
        src={IMAGES_SOCIAL(cdnLink, 'google')} />
        Ingresa con Google
      {/* {!isMobile ? 'Ingresa con Google' : undefined} */}
    </GoogleLogin>
  )
}

export default GoogleButton

