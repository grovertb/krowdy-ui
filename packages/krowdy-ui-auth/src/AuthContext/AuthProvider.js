import React, { useCallback, useEffect, useReducer, useRef } from 'react'
import PropTypes from 'prop-types'
import LoginContext from './LoginContext'
import AuthClient from '../Client'
// import { createMuiTheme, krowdyTheme } from '@krowdy-ui/core'

const initialState = {
  accessToken : '',
  idUser      : '',
  isNew       : false,
  loading     : false,
  refreshToken: '',
  successLogin: false
}

const reducer = (state, action)=> {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        ...action.value
      }

    default:
      break
  }
}

// const theme = createMuiTheme({
//   ...krowdyTheme,
//   template: {
//     header: {
//       logo: {
//         source: '//cdn.krowdy.com/media/images/KrowdyLogo2.svg'
//       }
//     }
//   }
// })

// export const useGetThemeByDomain = (themeProvider) => {
//   if(themeProvider)
//     return {
//       ...theme,
//       ...themeProvider,
//       palette: {
//         ...theme.palette,
//         ...themeProvider.palette
//       }
//     }
//   else
//     return themeProvider
// }

const updateStorage = (storage, objUpd) => {
  if(storage ==='localStorage')
    for (const key in objUpd)
      localStorage.setItem(key, objUpd[key])
  else if(storage ==='cookies')
    for (const key in objUpd)
      document.cookie = `${key}=${objUpd[key]}`
}

const AuthProvider = ({
  children,
  stateContext,
  baseUrl,
  storage = 'localStorage'
}) => {
  const authClient  = useRef()
  const [ state, dispatch ] = useReducer(reducer, initialState)

  useEffect(() => {
    if(baseUrl) authClient.current = new AuthClient(baseUrl)
  }, [ baseUrl ])

  // Verificar sesion y setear al state
  useEffect(() => {
    if(authClient && authClient.current)
      authClient.current.verifySession().then(res => {
        if(res.success)
          dispatch({
            type : 'UPDATE_FIELD',
            value: {
              successLogin: true,
              userId      : res.userId
            }
          })
      }).catch(()=>{
        dispatch({
          type : 'UPDATE_FIELD',
          value: {
            error: true
          }
        })
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleVerifyAccount = useCallback(async (source) => {
    dispatch({
      type : 'UPDATE_FIELD',
      value: {
        loading: true
      }
    })
    let data
    if(authClient && authClient.current)
      data = await authClient.current.validateAccount(source)

    let result = data

    if(data && data.success) {
      const { hasPassword, success, value, type } = data
      dispatch({
        type : 'UPDATE_FIELD',
        value: {
          typeCode: type
        }
      })

      result = { hasPassword, success, type, value }
    }

    dispatch({
      type : 'UPDATE_FIELD',
      value: {
        loading: false
      }
    })

    return result
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleSendVerifyCode = useCallback((source) => {
    if(authClient && authClient.current)
      authClient.current.sendVerifyCode(source)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ authClient ])

  const _handleLoginByPassword = useCallback(async ({ email, password }) => {
    dispatch({
      type : 'UPDATE_FIELD',
      value: {
        loading: true
      }
    })
    let data

    if(authClient && authClient.current)
      data = await authClient.current.loginByPassword({ email, password })

    let result = data

    if(data.success) {
      const { accessToken, refreshToken, userId } = data

      updateStorage(storage, { accessToken, idUser: userId, refreshToken })

      dispatch({
        type : 'UPDATE_FIELD',
        value: {
          accessToken,
          refreshToken,
          successLogin: true,
          userId
        }
      })

      result= { accessToken, refreshToken, success: true, userId }
    }

    dispatch({
      type : 'UPDATE_FIELD',
      value: {
        loading: false
      }
    })

    return result
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ authClient ])

  const _handleLoginByCode = useCallback(async ({ code, value, type }) => {
    dispatch({
      type : 'UPDATE_FIELD',
      value: {
        loading: true
      }
    })

    let data
    if(authClient && authClient.current)
      data = await authClient.current.verifyCode({ code, type, value })

    let result = data

    if(data.success) {
      const { accessToken, refreshToken, userId, isNew } = data

      updateStorage(storage, { accessToken, idUser: userId, refreshToken })

      dispatch({
        type : 'UPDATE_FIELD',
        value: {
          accessToken,
          isNew,
          refreshToken,
          userId
        }
      })

      result= { accessToken, isNew, refreshToken, success: true, userId }
    }

    dispatch({
      type : 'UPDATE_FIELD',
      value: {
        loading: false
      }
    })

    return result
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleSuccessLogin = useCallback((successLogin) => {
    dispatch({
      type : 'UPDATE_FIELD',
      value: {
        successLogin
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleUpdateAccount = useCallback(async (body) => {
    dispatch({
      type : 'UPDATE_FIELD',
      value: {
        loading: true
      }
    })

    let data
    if(authClient && authClient.current)
      data = await authClient.current.updateAccount(state.accessToken, body)

    dispatch({
      type : 'UPDATE_FIELD',
      value: {
        loading     : false,
        successLogin: Boolean(data && data.success)
      }
    })

    return data
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [ state.accessToken ])

  return (
    <LoginContext.Provider
      value={{
        ...state,
        ...stateContext,
        loginByCode     : _handleLoginByCode,
        loginByPassword : _handleLoginByPassword,
        onSuccessLogin  : _handleSuccessLogin,
        sendVerifyOrCode: _handleSendVerifyCode,
        updateAccount   : _handleUpdateAccount,
        verifyAccount   : _handleVerifyAccount
      }}>
      {children}
    </LoginContext.Provider>
  )
}

AuthProvider.propTypes = {
  baseUrl     : PropTypes.string.isRequired,
  children    : PropTypes.any,
  clientId    : PropTypes.string,
  domain      : PropTypes.string,
  redirectUri : PropTypes.bool,
  stateContext: PropTypes.any,
  storage     : PropTypes.string
}

export default React.memo(AuthProvider)
