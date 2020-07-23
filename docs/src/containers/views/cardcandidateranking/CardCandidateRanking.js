import React from 'react'
import { CardCandidateRanking } from '@krowdy-ui/views'
import { makeStyles, IconButton } from '@krowdy-ui/core'
import { MoreVert as MoreVertIcon, Message as MessageIcon } from '@material-ui/icons'

const candidate = {
  __typename: 'Candidate',
  _id       : '5ed7b5eb9075426bdb225a2e',
  firstName : 'Osmil',
  lastName  : 'Reyes Mogollon',
  photo     : 'https://krowdy.s3.amazonaws.com/assets/profile/5e375a0b71db5e002dc01323/avatar/2020-02-03T12-22-52-143Z.png'
}

export default function () {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <CardCandidateRanking
        action={<IconButton color='primary' size='small'><MoreVertIcon fontSize='small' /></IconButton>}
        actionHoverable={<IconButton color='primary' size='small'><MessageIcon fontSize='small' /></IconButton>}
        firstName={candidate.firstName}
        lastName={candidate.lastName}
        photo={candidate.photo}
        position={1} />
      <CardCandidateRanking
        action={<IconButton color='primary' size='small'><MoreVertIcon fontSize='small' /></IconButton>}
        firstName={candidate.firstName}
        lastName={candidate.lastName}
        paddingLeft
        photo={candidate.photo} />
    </div>
  )
}

const useStyles = makeStyles({
  container: {
    width: 320
  }
})
