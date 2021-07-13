import { useEffect } from 'react'
import { parseQueryString } from '../utils'

const LinkedInPopUp = () => {
  useEffect(() => {
    const params = parseQueryString(window.location.search)

    if(params.error) {
      const errorMessage = params.error_description || 'Login failed. Please try again.'

      window.opener &&
            window.opener.postMessage(
              { error: params.error, errorMessage, from: 'Linked In', state: params.state },
              window.location.origin
            )

      if(params.error === 'user_cancelled_login') window.close()
    }

    if(params.code)
      window.opener &&
            window.opener.postMessage(
              { code: params.code, from: 'Linked In', state: params.state },
              window.location.origin
            )
  }, [])

  return null
}

export default LinkedInPopUp
