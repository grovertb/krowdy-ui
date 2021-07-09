import React from 'react'
import { OnetapAuth } from '@krowdy-ui/auth'
import Test from './test'

export default function () {
  return (
    <OnetapAuth
      AuthContextProps={{
        baseUrl: 'http://localhost:9876',
        social : {
          google  : {},
          linkedin: {}
        },
        urlLogin: 'http://localhost:3001'
      }}>
      <Test />
    </OnetapAuth>
  )
}
