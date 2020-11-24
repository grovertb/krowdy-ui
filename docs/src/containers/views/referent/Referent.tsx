import React from 'react'
import { makeStyles } from '@krowdy-ui/core'



export default function () {
  const classes = useStyles()
  console.log("classes",classes)
  return (
    <div>
      Referent
    </div>
  )
}

const useStyles = makeStyles({
  cardCandidateRanking: {
    marginBottom: 8
  }
})
