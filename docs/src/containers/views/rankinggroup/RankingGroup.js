import React from 'react'
import { Button } from '@krowdy-ui/core'
import { RankingGroup } from '@krowdy-ui/views'
const rankingGroup = {
  name  : 'Grupo 1',
  status: 'draft'
}

export default function () {
  const _handleClickActiveGroup = () => {
    console.log('_handleClickActiveGroup')
  }

  return (
    <RankingGroup
      rightActionFooter={rankingGroup.status === 'draft' && <Button color='primary' onClick={_handleClickActiveGroup}>Activar</Button>}
      status={rankingGroup.status === 'active'}
      title={rankingGroup.name}>

    </RankingGroup>
  )
}
