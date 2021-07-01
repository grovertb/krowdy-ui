import { useContext } from 'react'
import LoginContext from '../OnetapAuth/LoginContext'

const useAuth = () => useContext(LoginContext)

export default useAuth
