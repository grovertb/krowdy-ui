import React from 'react'
import PropTypes from 'prop-types'
import { Chip } from '@krowdy-ui/core'
import { useStyles } from './styles'

const CardKnowledge = ({ knowledgeName, level }) => {
  const classes = useStyles()

  return  (
    <div className={classes.marginBottom}>
      <Chip className={classes.chip} label={`${knowledgeName} ${level}`} />
    </div>
  )
}

CardKnowledge.propTypes = {
  knowledgeName: PropTypes.string,
  level        : PropTypes.string
}

export default React.memo(CardKnowledge)
