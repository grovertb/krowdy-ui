import React from 'react'
import { useAuth } from '@krowdy-ui/auth'
import { Button } from '@krowdy-ui/core'

const Test =  () => {
  const { onOpen = () => {} } = useAuth()

  return (
    <Button
      color='primary'
      onClick={onOpen}
      variant='contained'>
CLICK ME!
    </Button>
  )
}

export default Test
