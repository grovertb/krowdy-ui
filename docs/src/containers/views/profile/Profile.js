import React from 'react'
import { Profile } from '@krowdy-ui/views'

export default function() {
  return (
    <div style={{ alignItems: 'baseline', display: 'flex', width: 452 }}>
      <Profile
        ascent={{
          count: 2,
          time : 10 * 12
        }}
        experience={2}
        krowdyExperience={1}
        name='Piero Rodríguez'
        rating={4.3}
        rotation={{
          count: 1,
          time : 6
        }}
        salary={3} />
    </div>
  )
}
