import React from 'react'
import { Button } from '@krowdy-ui/core'
import { RankingGroup, MultiCheckBox, CardCandidateRanking } from '@krowdy-ui/views'
import { IconButton } from '@krowdy-ui/core'
import { MoreVert as MoreVertIcon, Message as MessageIcon } from '@material-ui/icons'

const rankingGroup = {
  name  : 'Grupo 1',
  status: 'draft'
}

const options = [ {
  checked   : true,
  key       : 'Reclutadores',
  label     : 'Reclutadores',
  subOptions: [ {
    checked: true,
    key    : '1',
    label  : 'Panchito'
  },{
    checked: true,
    key    : '2',
    label  : 'Jaimito'
  },{
    checked: true,
    key    : '3',
    label  : 'Anafleto'
  }  ]
}, {
  checked   : true,
  key       : 'Responsables',
  label     : 'Responsables',
  subOptions: [ {
    checked: true,
    key    : '4',
    label  : 'Panchito'
  },{
    checked: true,
    key    : '5',
    label  : 'Jaimito'
  },{
    checked: true,
    key    : '6',
    label  : 'Anafleto'
  }  ]
} ]

const candidateRankings =[
  {
    __typename: 'CandidateRanking',
    _id       : '5f19bf86c58d544ab95ab9ab',
    candidate : {
      __typename: 'Candidate',
      _id       : '5ed7b5eb9075426bdb2259d1',
      firstName : 'Mauro Jhonatan',
      lastName  : 'Cruz Balladares',
      photo     : null
    },
    candidateId: '5ed7b5eb9075426bdb2259d1'
  },
  {
    __typename: 'CandidateRanking',
    _id       : '5f19bf86c58d544ab95ab9ad',
    candidate : {
      __typename: 'Candidate',
      _id       : '5ed7b5eb9075426bdb225a0d',
      firstName : 'Maribel',
      lastName  : 'Apcho Camara',
      photo     : null
    },
    candidateId: '5ed7b5eb9075426bdb225a0d'
  },
  {
    __typename: 'CandidateRanking',
    _id       : '5f19bf86c58d544ab95ab9af',
    candidate : {
      __typename: 'Candidate',
      _id       : '5ed7b5eb9075426bdb225a2e',
      firstName : 'Osmil',
      lastName  : 'Reyes Mogollon',
      photo     : 'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png'
    },
    candidateId: '5ed7b5eb9075426bdb225a2e'
  }
]

export default function () {
  const _handleClickActiveGroup = () => {
    console.log('_handleClickActiveGroup')
  }

  return (
    <RankingGroup
      leftActionFooter={<MultiCheckBox label='Revisores' options={options} />}
      rightActionFooter={rankingGroup.status === 'draft' && <Button color='primary' onClick={_handleClickActiveGroup}>Activar</Button>}
      status={rankingGroup.status === 'active'}
      title={rankingGroup.name}>
      {candidateRankings.map((candidateRanking, index) => (
        <CardCandidateRanking
          action={<IconButton color='primary' size='small'><MoreVertIcon fontSize='small' /></IconButton>}
          actionHoverable={<IconButton color='primary' size='small'><MessageIcon fontSize='small' /></IconButton>}
          firstName={candidateRanking.candidate.firstName}
          key={candidateRanking._id}
          lastName={candidateRanking.candidate.lastName}
          photo={candidateRanking.candidate.photo}
          position={index + 1} />
      ))}
    </RankingGroup>
  )
}
