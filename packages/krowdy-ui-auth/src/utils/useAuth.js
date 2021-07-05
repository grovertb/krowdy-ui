import { useContext } from 'react'
import LoginContext from '../AuthContext/LoginContext'

const useAuth = () => useContext(LoginContext)

export default useAuth

// export const useVerifyLogin = () => {
//   const verifyLogin = async (onFinish) => {
//     try {
//       const { localStorage } = window
//       const accessToken = localStorage.getItem('accessToken')
//       if(!accessToken) {
//         onFinish(false)
//       } else {
//         const { data } = (await accountAPI.get(accountsApiUrl + '/api/authenticate')) || {}

//         onFinish(data?.success)
//       }
//     } catch (error) {
//       onFinish(false)
//     }
//   }

//   return [ verifyLogin ]
// }
