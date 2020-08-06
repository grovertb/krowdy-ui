import React from 'react'
import { Profile } from '@krowdy-ui/views'
import { InsertDriveFile as InsertDriveFileIcon } from '@material-ui/icons'

export default function() {
  return (
    <div style={{ alignItems: 'baseline', display: 'flex', width: 452 }}>
      <Profile
        action={<InsertDriveFileIcon color='primary' fontSize='small' />}
        ascent={{
          count: 2,
          time : 10 * 12
        }}
        experience={2}
        name='Piero Rodríguez'
        rating={4.3}
        rotation={{
          count: 1,
          time : 6
        }}
        salaryText={'3/10 (de mas caro a mas barato)'}
        workExperience={{
          count: 1,
          name : 'Krowdy'
        }} />
    </div>
  )
}
