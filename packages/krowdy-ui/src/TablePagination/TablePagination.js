import React from 'react'
// import PropTypes from 'prop-types'
import clsx from 'clsx'
import withStyles from '../styles/withStyles'
import MuiTablePagination from '@material-ui/core/TablePagination'
import TextField from '../TextField'

export const styles = theme => ({
  actions: {
    display   : 'flex',
    marginLeft: -90
  },
  backIcon: {
    fontSize   : 18,
    marginRight: 28
  },
  caption: {
    fontSize: 12
  },
  color: {
    color: theme.palette.grey[700]
  },
  input: {

  },
  nextIcon: {

  },
  select: {
    border      : `1px solid ${theme.palette.grey[400]}`,
    borderRadius: 4,
    boxSizing   : 'border-box',
    fontSize    : 12
  },
  selectIcon: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'center'
  },
  selectRoot: {
    marginRight: 38
  }
})

const TablePagination = React.forwardRef(function TablePagination({ ...props }) {
  const {
    classes,
    ...otherProps
  } = props

  return (<MuiTablePagination
    backIconButtonProps={{
      classes: {
        root: clsx(classes.backIcon, classes.color)
      }
    }}
    classes={
      {
        actions   : classes.actions,
        caption   : clsx(classes.caption, classes.color),
        input     : clsx(classes.input, classes.color),
        select    : classes.select,
        selectIcon: classes.selectIcon,
        selectRoot: classes.selectRoot
      }
    }
    labelDisplayedRows={({ from, to }) => `${
      <TextField>  {from}</TextField>}/${to}`}
    // ActionsComponent={}
    nextIconButtonProps={{
      classes: {
        root: clsx(classes.nextIcon, classes.color)
      }

    }}
    // SelectProps={{
    //   classes: {
    //     root: classes.colorInput
    //   }
    // }}

    {...otherProps} />)
})

TablePagination.propTypes = {

}

export default withStyles(styles, { name: 'TablePagination' })(TablePagination)
