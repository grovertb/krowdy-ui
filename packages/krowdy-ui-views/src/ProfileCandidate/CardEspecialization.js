import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@krowdy-ui/core'
import { Business as BusinessIcon } from '@material-ui/icons'
import { useStyles } from './styles'

const CardEspecialization = ({ especializationName, especializationPlace, endDate, startDate, studyingHere, description }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant='h5'>{especializationName}</Typography>
      <div className={classes.companyContent}>
        <div className={classes.companyImageContent}>
          <BusinessIcon color='disabled' />
        </div>
        <Typography variant='h6'>{especializationPlace}</Typography>
      </div>
      {startDate || studyingHere || endDate ? <Typography variant='body2'>{startDate} - {studyingHere ? 'Actual' : endDate }</Typography> : null}
      {description ? <Typography variant='body2'>{description}</Typography> : null}
    </div>
  )
}

CardEspecialization.propTypes = {
  description         : PropTypes.string,
  endDate             : PropTypes.string,
  especializationName : PropTypes.string,
  especializationPlace: PropTypes.string,
  startDate           : PropTypes.string,
  studyingHere        : PropTypes.bool
}

export default React.memo(CardEspecialization)
