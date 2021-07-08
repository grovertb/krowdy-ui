import React from 'react'
import { AuthContext, LoginSinglePage } from '@krowdy-ui/auth'
import { Card, CardContent } from '@krowdy-ui/core'

export default function () {
  return (
    <AuthContext
      baseUrl='http://localhost:9876'
      clientSecret='nuevo'
      social={{
        google: {
          clientId   : '612106570053-ke4agjifh4j78e4od0i5l3duh85u6tl7.apps.googleusercontent.com',
          redirectUri: ''
        },
        linkedin: {
          clientId   : '7745ijxvz0u4gq',
          redirectUri: ''
        }
      }}>
      <Card >
        <CardContent>
          <LoginSinglePage />
        </CardContent>
      </Card>
    </AuthContext>
  )
}
