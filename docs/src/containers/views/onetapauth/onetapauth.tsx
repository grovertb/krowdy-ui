import React from 'react'
import { OnetapAuth } from '@krowdy-ui/auth'
import Test from './test'

export default function () {
  return (
    <OnetapAuth
      AuthContextProps={{
        baseUrl    : 'http://localhost:9876',
        clientId   : 'YOUR_AUTH0_CLIENT_ID',
        domain     : 'YOUR_AUTH0_DOMAIN',
        redirectUri: window.location.origin
      }}>
      <Test />
    </OnetapAuth>
  )
}
