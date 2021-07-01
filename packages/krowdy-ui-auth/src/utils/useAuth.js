import { useContext } from 'react'
import LoginContext from '../AuthContext/LoginContext'

const useAuth = () => useContext(LoginContext)

export default useAuth
