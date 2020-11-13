import React from 'react'
import { AvatarUser } from '@krowdy-ui/views'

export default function () {
  const _handleDelete = () => {

  }

  return (
    <div>
      <AvatarUser
        size='small'
        user={{
          firstName: 'Xavi',
          lastName : 'Gonzalez',
          photo    : ''
        }} />
      <AvatarUser
        onDelete={_handleDelete}
        size='small'
        user={{
          firstName: 'Xavi',
          lastName : 'Gonzalez',
          photo    : ''
        }} />
    </div>
  )
}
