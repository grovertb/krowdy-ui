import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'

export const styles = () => ({
  title: {
    color: 'red'
  }
})

const Header = props => {
  const {
    title
  } = props

  return (
    <div>
      {title}
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

Header.muiName = 'Header'

export default withStyles(styles, { name: 'KrowdyHeader' })(Header)
