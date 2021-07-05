import React, { useCallback, useReducer } from 'react'
import PropTypes from 'prop-types'
import LoginContext from './LoginContext'
import AuthClient from '../Client'
// import { createMuiTheme, krowdyTheme } from '@krowdy-ui/core'

const initialState = {
  accessToken : '',
  idUser      : '',
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
      localStorage.setItem(key, JSON.stringify(objUpd[key]))
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

  // useEffect(()=>{

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // const _handleUpdateState = useCallback(() => {
  //   dispatch({
  //     type: 'UPDATE_FIELD'
  //   })
  // }, [])

  const _handleVerifyAccount = useCallback(async (source)=> {
    const data =  await Auth.validateAccount(source)
    if(data?.success) {
      const { hasPassword, success, value, type } = data
      dispatch({
        type : 'UPDATE_FIELD',
        value: {
          typeCode: type
        }
      })

      return { hasPassword, success, type, value }
    }
    else {return data}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleSendVerifyCode = useCallback((source)=>{
    Auth.sendVerifyCode(source)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleLoginByPassword = useCallback(async ({ email, password }) => {
    const data = await Auth.loginByPassword({ email, password })

    if(data.success) {
      const { accessToken, refreshToken, userId } = data

      updateLocalStorage(storage, { accessToken, idUser: userId, refreshToken })

      dispatch({
        type : 'UPDATE_FIELD',
        value: {
          accessToken,
          refreshToken,
          userId
        }
      })

      return { accessToken, refreshToken, success: true, userId }
    } else {
      return data
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const _handleVerifyCode = useCallback(async ({ code, value, type })=>{
    const data = await Auth.verifyCode({ code, type, value })
    if(data.success) {
      const { accessToken, refreshToken, userId } = data

      updateLocalStorage(storage, { accessToken, idUser: userId, refreshToken })

      dispatch({
        type : 'UPDATE_FIELD',
        value: {
          accessToken,
          refreshToken,
          userId
        }
      })

      return { accessToken, refreshToken, success: true, userId }
    } else {
      return data
    }
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

  return (
    <LoginContext.Provider
      value={{
        ...state,
        ...stateContext,
        loginByPassword : _handleLoginByPassword,
        onSuccessLogin  : _handleSuccessLogin,
        sendVerifyOrCode: _handleSendVerifyCode,
        verifyAccount   : _handleVerifyAccount,
        verifyCode      : _handleVerifyCode
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
