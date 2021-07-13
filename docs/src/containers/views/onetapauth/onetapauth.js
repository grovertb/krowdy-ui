import React from 'react'
import { OnetapAuth } from '@krowdy-ui/auth'
import Test from './test'

export default function () {
  return (
    <OnetapAuth
      AuthContextProps={{
        baseUrl: 'http://localhost:9876',
        social : {
          google: {
            clientId: '612106570053-ke4agjifh4j78e4od0i5l3duh85u6tl7.apps.googleusercontent.com'
          },
          linkedin: {
            clientId   : '77ryo6ilm04r9z',
            redirectUri: 'http://localhost:3000/views/onetapauth',
            scope      : 'r_emailaddress'
          },
          microsoft: {
            clientId   : '8a78aebe-f6c7-4371-9974-c72d6cd019bc',
            redirectUri: 'http://localhost:3000'
          }
        },
        urlLogin: 'http://localhost:3001'
      }}>
      <Test />
    </OnetapAuth>
  )
}
