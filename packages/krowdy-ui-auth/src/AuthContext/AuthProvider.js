import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import LoginContext from './LoginContext'
import AuthClient from '../Client'
import { initialState, updateStorage, clearStorage } from './utils'

const AuthProvider = ({
  children,
  stateContext = {},
  baseUrl,
  storage = 'localStorage',
  urlLogin,
  social:{
    google,
    linkedin,
    microsoft,
    facebook
  } = {},
  referrer,
  clientSecret,
  loginWith = 'only-email',
  clientId
}) => {
  const authClient  = useRef()
  const iframeRef = useRef()
  const [ state, setState ] = useState(initialState)
  const [ msalInstance, setMsalInstance ] = useState(null)

  useEffect(() => {
    if(baseUrl) authClient.current = new AuthClient(baseUrl)
  }, [ baseUrl ])

  const sendMessageToLoginApp = useCallback((eventId, credentials) => {
    const iframe = iframeRef ? iframeRef.current : null
    if(iframe)
      iframe.contentWindow.postMessage(
        {
          credentials,
          eventId
        },
        `${urlLogin}/set-credentials`
      )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ urlLogin, iframeRef, iframeRef.current ])

  const _handleVerifySession = useCallback((credentials) =>
    authClient.current.verifySession(credentials).then(res => {
      if(res.success) {
        setState(prev => ({
          ...prev,
          ...credentials
        }))
        updateStorage(storage, credentials)
      }

      return res.success
    }).catch(() => {
      setState(prev => ({
        ...prev,
        error: true
      }))

      return false
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [ authClient, authClient.current ])

  const _handleMessage = useCallback(async ({ data }) => {
    const { success, eventId, credentials } = data

    if(success && eventId === 'authStatus') {
      const successLogin = await _handleVerifySession(credentials)

      setState(prev => ({
        ...prev,
        flowFinished: successLogin,
        loadingAuth : false,
        successLogin
      }))
    } else {
      setState(prev => ({
        ...prev,
        loadingAuth: false
      }))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if(urlLogin) {
      window.addEventListener('message', _handleMessage, false)

      return () => window.removeEventListener('message', _handleMessage)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleVerifyAccount = useCallback(async (source) => {
    setState(prev=>({
      ...prev,
      loading: true
    }))
    let data
    if(authClient && authClient.current)
      data = await authClient.current.validateAccount(source)

    let result = data

    if(data && data.success) {
      const { hasPassword, success, value, type } = data
      setState(prev => ({
        ...prev,
        typeCode: type
      }))

      result = { hasPassword, success, type, value }
    }

    setState(prev => ({
      ...prev,
      loading: false
    }))

    return result
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleSendVerifyCode = useCallback((source) => {
    if(authClient && authClient.current)
      authClient.current.sendVerifyCode(source)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ authClient ])

  const _handleLoginByPassword = useCallback(({ email, password, keepSession }) => {
    if(authClient && authClient.current) {
      setState(prev => ({
        ...prev,
        loading: true
      }))

      return authClient.current.loginByPassword({
        allowAds: state.allowAds,
        clientId,
        clientSecret,
        email,
        keepSession,
        password
      }).then((data)=>{
        let result = {}

        if(data.success) {
          const { accessToken, refreshToken, userId } = data

          updateStorage(storage, { accessToken, iduser: userId, refreshToken })

          setState(prev => ({
            ...prev,
            accessToken,
            flowFinished: true,
            refreshToken,
            successLogin: true,
            userId
          }))

          sendMessageToLoginApp('logged', { accessToken, iduser: userId, refreshToken })

          result = { accessToken, refreshToken, success: true, userId }
        }

        setState(prev => ({
          ...prev,
          loading: false
        }))

        return result
      }).catch(() => {
        setState(prev => ({
          ...prev,
          loading: false
        }))

        return {}
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ authClient, authClient.current ])

  const _handleLoginByCode = useCallback(async ({ code, value, type, keepSession }) => {
    if(authClient && authClient.current) {
      setState(prev => ({
        ...prev,
        loading: true
      }))

      return authClient.current.verifyCode({
        allowAds: state.allowAds,
        clientId,
        clientSecret,
        code,
        keepSession,
        type,
        value }).then((data)=>{
        let result = {}
        if(data.success) {
          const { accessToken, refreshToken, userId, isNew } = data

          updateStorage(storage, { accessToken, iduser: userId, refreshToken })

          setState(prev => ({
            ...prev,
            accessToken,
            flowFinished: !isNew,
            isNew,
            refreshToken,
            userId
          }))

          sendMessageToLoginApp('logged', { accessToken, iduser: userId, refreshToken })

          result = { accessToken, isNew, refreshToken, success: true, userId }
        }

        setState(prev => ({
          ...prev,
          loading: false
        }))

        return result
      }).catch(() => {
        setState(prev => ({
          ...prev,
          loading: false
        }))

        return {}
      })
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ authClient, authClient.current ])

  const _handleSuccessLogin = useCallback((successLogin) => {
    setState(prev => ({
      ...prev,
      successLogin
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleUpdateAccount = useCallback(async (body) => {
    setState(prev => ({
      ...prev,
      loading: true
    }))

    let data
    if(authClient && authClient.current)
      data = await authClient.current.updateAccount(state.accessToken, body)

    setState(prev => ({
      ...prev,
      loading     : false,
      successLogin: Boolean(data && data.success)
    }))

    return data
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [ state.accessToken ])

  const _handleValidateSocial = useCallback(async (network, response) => {
    const { tokenId } = response
    if(authClient && authClient.current) {
      const { error, refreshToken, accessToken, userId } = await authClient.current.loginSocialNetwork({
        allowAds   : state.allowAds ? 1 : 0,
        clientId,
        clientSecret,
        keepSession: state.keepSession ? 1 : 0,
        network,
        tokenId
      }, referrer)

      if(!error) {
        updateStorage(storage, { accessToken, iduser: userId, refreshToken })
        setState(prev => ({
          ...prev,
          accessToken,
          flowFinished: true,
          refreshToken,
          successLogin: true,
          userId
        }))
      }
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ authClient, authClient.current ])

  const _handleAllowAds = useCallback(()=>{
    setState(prev => ({
      ...prev,
      allowAds: !prev.allowAds
    }))
  }, [])

  const _handleFlowFinished = useCallback((flowFinished)=>{
    setState(prev => ({
      ...prev,
      flowFinished
    }))
  }, [])

  const createPassword = useCallback(async (password)=>{
    if(authClient && authClient.current) {
      setState(prev => ({
        ...prev,
        loading: true
      }))

      const res = await authClient.current.updatePassword({ accessToken: state.accessToken, password })

      if(!res || !res.success) {
        setState(prev => ({
          ...prev,
          loading: false
        }))

        return { success: false }
      }

      setState(prev => ({
        ...prev,
        flowFinished: true,
        loading     : false,
        successLogin: true
      }))

      return { success: true }
    } else {
      return { success: false }
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ authClient, authClient.current, state.accessToken ])

  const _handleLogOut = useCallback(() => {
    const deleteSession = () => {
      clearStorage(storage, [ 'accessToken', 'iduser', 'refreshToken' ])
      msalInstance && msalInstance.logout()
    }

    const { accessToken, refreshToken } = state

    if(accessToken || refreshToken)
      authClient.current.logout({ accessToken, refreshToken })
        .then((res) => {
          const { data: { success = null } = {} } = res
          if(!success) return console.error('Error when user closing session')
          deleteSession()
        })
        .catch(() => {
          deleteSession()
        })
    else
      deleteSession()
  }, [ msalInstance, state, storage ])

  const _handleMsalInstanceChange = useCallback((msal) => {
    setMsalInstance(msal)
  }, [])

  const _handleUpdateState = useCallback((data)=>{
    setState(prev=>({
      ...prev,
      ...data
    }))
  }, [])

  return (
    <LoginContext.Provider
      value={{
        ...state,
        ...stateContext,
        facebookCredentials  : facebook,
        googleCredentials    : google,
        linkedinCredentials  : linkedin,
        loginByCode          : _handleLoginByCode,
        loginByPassword      : _handleLoginByPassword,
        loginWith,
        logout               : _handleLogOut,
        microsoftCredentials : microsoft,
        onAllowAds           : _handleAllowAds,
        onFlowFinished       : _handleFlowFinished,
        onMsalInstanceChange : _handleMsalInstanceChange,
        onSuccessLogin       : _handleSuccessLogin,
        onUpdatePassword     : createPassword,
        onUpdateState        : _handleUpdateState,
        referrer,
        sendVerifyOrCode     : _handleSendVerifyCode,
        updateAccount        : _handleUpdateAccount,
        validateSocialNetwork: _handleValidateSocial,
        verifyAccount        : _handleVerifyAccount
      }}>
      {
        urlLogin ?
          <iframe
            height='0px'
            ref={iframeRef}
            src={`${urlLogin}/set-credentials`}
            style={{ display: 'none' }}
            title='Alternative login'
            width='0px' /> :
          null
      }
      {children}
    </LoginContext.Provider>
  )
}

AuthProvider.propTypes = {
  baseUrl     : PropTypes.string.isRequired,
  children    : PropTypes.any,
  clientId    : PropTypes.string,
  clientSecret: PropTypes.string,
  loginWith   : PropTypes.oneOf([ 'only-email', 'only-phone', 'phone-and-email' ]),
  referrer    : PropTypes.string,
  social      : PropTypes.shape({
    facebook: PropTypes.shape({
      clientId   : PropTypes.string,
      redirectUri: PropTypes.string
    }),
    google: PropTypes.shape({
      clientId   : PropTypes.string,
      redirectUri: PropTypes.string
    }),
    linkedin: PropTypes.shape({
      clientId   : PropTypes.string,
      redirectUri: PropTypes.string
    }),
    microsoft: PropTypes.shape({
      clientId   : PropTypes.string,
      redirectUri: PropTypes.string
    })
  }),
  stateContext: PropTypes.any,
  storage     : PropTypes.string,
  urlLogin    : PropTypes.string
}

export default React.memo(AuthProvider)
