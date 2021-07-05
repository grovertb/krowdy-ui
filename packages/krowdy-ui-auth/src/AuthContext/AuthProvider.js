import React, { useCallback, useReducer } from 'react'
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

const updateLocalStorage = (storage, objUpd) => {
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
  baseUrl = 'http://localhost:9876',
  storage = 'localStorage'
}) => {
  const Auth = new AuthClient(baseUrl)

  const [ state, dispatch ] = useReducer(reducer, initialState)

  // Verificar sesion y setear al state

  const _handleVerifyAccount = useCallback(async (source)=> {
    dispatch({
      type : 'UPDATE_FIELD',
      value: {
        loading: true
      }
    })

    const data = await Auth.validateAccount(source)

    let result = data

    if(data?.success) {
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

  const _handleSendVerifyCode = useCallback((source)=>{
    Auth.sendVerifyCode(source)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleLoginByPassword = useCallback(async ({ email, password }) => {
    dispatch({
      type : 'UPDATE_FIELD',
      value: {
        loading: true
      }
    })
    const data = await Auth.loginByPassword({ email, password })

    let result = data

    if(data.success) {
      const { accessToken, refreshToken, userId } = data

      updateLocalStorage(storage, { accessToken, idUser: userId, refreshToken })

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
  }, [])

  const _handleLoginByCode = useCallback(async ({ code, value, type })=>{
    dispatch({
      type : 'UPDATE_FIELD',
      value: {
        loading: true
      }
    })

    const data = await Auth.verifyCode({ code, type, value })

    let result = data

    if(data.success) {
      const { accessToken, refreshToken, userId, isNew } = data

      updateLocalStorage(storage, { accessToken, idUser: userId, refreshToken })

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

  const _handleSuccessLogin = useCallback((successLogin)=>{
    dispatch({
      type : 'UPDATE_FIELD',
      value: {
        successLogin
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleUpdateAccount = useCallback(async (body)=>{
    dispatch({
      type : 'UPDATE_FIELD',
      value: {
        loading: true
      }
    })

    const data = await Auth.updateAccount(state.accessToken, body)

    dispatch({
      type : 'UPDATE_FIELD',
      value: {
        loading     : false,
        successLogin: Boolean(data?.success)
      }
    })

    return data
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  , [ state?.accessToken ])

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
  baseUrl     : PropTypes.string,
  children    : PropTypes.any,
  clientId    : PropTypes.string,
  domain      : PropTypes.string,
  redirectUri : PropTypes.bool,
  stateContext: PropTypes.any,
  storage     : PropTypes.string
}

export default React.memo(AuthProvider)
