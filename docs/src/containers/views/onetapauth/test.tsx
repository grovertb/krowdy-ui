import React from 'react'
import { OnetapAuth, useAuth } from '@krowdy-ui/auth'

const Test =  () => {
  const res = useAuth()
  console.log('🚀 ~ file: test.js ~ line 6 ~ Test ~ res', res)

  return (
    <OnetapAuth />
  )
}

export default Test
