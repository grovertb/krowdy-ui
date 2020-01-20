import React from 'react'
import { AvatarUser } from '@krowdy-ui/views'

export default function () {

  return (
    <div>
      <AvatarUser user={{
        firstName: 'Xavi',
        lastName: 'Gonzalez',
        photo: ''
      }} />
    </div>
  )
}