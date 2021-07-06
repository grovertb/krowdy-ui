import React from 'react'
import { AuthContext, LoginSinglePage } from '@krowdy-ui/auth'

export default function () {
  return (
    <AuthContext
      baseUrl='http://localhost:9876'
      clientId='YOUR_AUTH0_CLIENT_ID'
      domain='YOUR_AUTH0_DOMAIN'
      redirectUri={window.location.origin}>
      <LoginSinglePage />
    </AuthContext>
  )
}
