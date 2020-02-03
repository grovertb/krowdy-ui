import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Typography'

const TabPanel = ({
  index,
  value,
  children,
  ...other
}) => (
  <Typography
    aria-labelledby={`wrapped-tab-${index}`}
    component='div'
    hidden={value !== index}
    id={`wrapped-tabpanel-${index}`}
    role='tabpanel'
    {...other}>
    {value === index && children}
  </Typography>
)

TabPanel.propTypes = {
  children: PropTypes.node,
  index   : PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
}

export default TabPanel
