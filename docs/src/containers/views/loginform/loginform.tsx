import React from 'react'
import { OnetapAuth, LoginSinglePage } from '@krowdy-ui/auth'

export default function () {
  return (
    <div>
      <OnetapAuth
        clientId='YOUR_AUTH0_CLIENT_ID'
        domain='YOUR_AUTH0_DOMAIN'
        isModal
        redirectUri={window.location.origin}>
        <LoginSinglePage />
      </OnetapAuth>
    </div>
  )
}
