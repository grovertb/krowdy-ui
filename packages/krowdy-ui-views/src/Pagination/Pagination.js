import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
  Search as SearchIcon
} from '@material-ui/icons'
export const styles = theme => ({

})

const Pagination = props => {
  const {
    classes
  } = props

  return (
    <div >
      <SearchIcon />
    </div >

  )
}

Pagination.propTypes = {
  classes   : PropTypes.object,
  searchIcon: PropTypes.node
}

Pagination.muiName = 'Pagination'

export default withStyles(styles, { name: 'KrowdyPagination' })(Pagination)
