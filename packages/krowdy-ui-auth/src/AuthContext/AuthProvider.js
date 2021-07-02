import React, { useCallback, useReducer } from 'react'
import PropTypes from 'prop-types'
import LoginContext from './LoginContext'
import AuthClient from '../Client'
// import { createMuiTheme, krowdyTheme } from '@krowdy-ui/core'

const initialState = {
  accessToken : '',
  idUser      : '',
  loading     : false,
  refreshToken: ''
}

const reducer = (state, action)=> {
  switch (action.type) {
    case 'UPDATE_FIELD':
      console.log('🚀 ~ file: AuthContext.js ~ line 14 ~ reducer ~ state', state)
      break

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

const AuthProvider = ({
  children,
  stateContext,
  baseUrl = 'http://localhost:9876'
}) => {
  const Auth = new AuthClient(baseUrl)

  const [ state ] = useReducer(reducer, initialState)

  // Verificar sesion y setear al state

  // useEffect(()=>{

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // const _handleUpdateState = useCallback(() => {
  //   dispatch({
  //     type: 'UPDATE_FIELD'
  //   })
  // }, [])

  const _handleVerifyAccount = useCallback((source)=> Auth.validateAccount(source)
  // eslint-disable-next-line react-hooks/exhaustive-deps
    , [])

  const _handleSendVerifyCode = useCallback((source)=>{
    Auth.sendVerifyCode(source)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LoginContext.Provider
      value={{
        ...state,
        ...stateContext,
        sendVerifyOrCode: _handleSendVerifyCode,
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
  stateContext: PropTypes.any
}

export default React.memo(AuthProvider)
