import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import withStyles from '../styles/withStyles'

import MuiTablePagination from '@material-ui/core/TablePagination'

export const styles = (theme) => ({

})

const TablePagination = React.forwardRef(function TablePagination({ color = 'default', ...props }, ref) {
  const {
    classes,
    backIconButtonProps,
    ...otherProps
  } = props

  return (<MuiTablePagination
    backIconButtonProps={{
      color: 'blue',
      height: 18,
      width: 18,
      position: 'absolute',
      marginRight: 15
    }}
  />)
})

TablePagination.propTypes = {


}

export default withStyles(styles, { name: 'TablePagination' })(TablePagination)