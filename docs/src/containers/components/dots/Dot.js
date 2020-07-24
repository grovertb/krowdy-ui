import React from 'react'
import { Dot } from '@krowdy-ui/core'

export default () => (
  <div>
    <div>
      <Dot title='Tooltip' />
    </div>
    <div>
      <Dot color='success' />
    </div>
    <div>
      <Dot color='error' title='Tooltip' />
    </div>
  </div>
)
