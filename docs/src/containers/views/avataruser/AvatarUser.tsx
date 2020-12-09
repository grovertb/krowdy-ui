import React from 'react'
import { AvatarUser } from '@krowdy-ui/views'

export default function () {
  return (
    <div>
      <AvatarUser user={{
        firstName: 'xavi',
        lastName : 'Gonzalez',
        photo    : ''
      }} />
    </div>
  )
}
