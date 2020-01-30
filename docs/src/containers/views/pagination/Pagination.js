import React from 'react'
import { Pagination } from '@krowdy-ui/views'

export default function () {
  const limits = [ 20, 50, 100 ]

  return (
    <div style={{
      alignItems    : 'center',
      display       : 'flex',
      flexDirection : 'column',
      height        : 400,
      justifyContent: 'space-evenly',
      margin        : '50px',
      width         : 'auto'
    }}>
      <Pagination limits={limits} valueInputPages={5} />
    </div>
  )
}
