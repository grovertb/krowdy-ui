import { krowdyTheme, createMuiTheme } from '@krowdy-ui/core'

export const initialState = {
  accessToken : '',
  allowAds    : true,
  flowFinished: false,
  iduser      : '',
  isNew       : false,
  loading     : false,
  loadingAuth : true,
  refreshToken: '',
  successLogin: false
}

export const defaultTheme = createMuiTheme(krowdyTheme)

export const getStorageData = (storage) => {
  const keys = [ 'accessToken', 'refreshToken', 'iduser' ]
  let credentials = {}
  if(storage ==='localStorage')
    for (const key of keys) {
      const value = localStorage.getItem(key)
      credentials[key] = value
    }

  return credentials
}

export const updateStorage = (storage, objUpd) => {
  if(storage ==='localStorage')
    for (const key in objUpd)
      localStorage.setItem(key, objUpd[key])

  else if(storage ==='cookies')
    for (const key in objUpd)
      document.cookie = `${key}=${objUpd[key]}`
}
