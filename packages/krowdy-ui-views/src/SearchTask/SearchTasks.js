import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'

export const styles = () => ({
  title: {
    color: 'red'
  }
})

const SearchTasks = props => {
  const {
    title
  } = props

  return (
    <div>
      {title}
    </div>
  )
}

SearchTasks.propTypes = {
  title: PropTypes.string
}

SearchTasks.muiName = 'SearchTasks'

export default withStyles(styles, { name: 'KrowdySearchTasks' })(SearchTasks)