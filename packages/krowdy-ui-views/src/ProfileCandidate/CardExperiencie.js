import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@krowdy-ui/core'
import { Business as BusinessIcon } from '@material-ui/icons'
import { useStyles } from './styles'

const CardExperiencie = ({ area, description, companyName, jobPosition, endDate, hierarchy, location, startDate, workHere }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant='h5'>{jobPosition}</Typography>
      <div className={classes.companyContent}>
        <div className={classes.companyImageContent}>
          <BusinessIcon color='disabled' />
        </div>
        <Typography variant='h6'>{companyName}</Typography>
      </div>
      {startDate || workHere || endDate ? <Typography variant='body2'>{startDate} - {workHere ? 'Actual' : endDate }</Typography> : null}
      {hierarchy ? <Typography color='info' variant='body1'>Jerarquía: {hierarchy}</Typography> : null}
      {area ? <Typography color='info' variant='body1'>Área: {area}</Typography> : null}
      {location ? <Typography color='info' variant='body1'>Ubicación: {location}</Typography> : null}
      {description ? <Typography variant='body2'>{description}</Typography> : null}
    </div>
  )
}

CardExperiencie.propTypes = {
  area           : PropTypes.string,
  companyName    : PropTypes.string,
  description    : PropTypes.string,
  endDate        : PropTypes.string,
  hierarchy      : PropTypes.string,
  institutionName: PropTypes.string,
  jobPosition    : PropTypes.string,
  location       : PropTypes.string,
  startDate      : PropTypes.string,
  workHere       : PropTypes.bool
}

export default React.memo(CardExperiencie)
