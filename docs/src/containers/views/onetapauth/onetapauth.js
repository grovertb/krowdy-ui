import React from 'react'
import { OnetapAuth } from '@krowdy-ui/auth'
import Test from './test'

export default function () {
  return (
    <div>
      <OnetapAuth
        clientId='YOUR_AUTH0_CLIENT_ID'
        domain='YOUR_AUTH0_DOMAIN'
        redirectUri={window.location.origin}>
        <Test />
      </OnetapAuth>
    </div>
  )
}
