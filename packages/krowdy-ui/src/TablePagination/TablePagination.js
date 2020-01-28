import React from 'react'
// import PropTypes from 'prop-types'
// import clsx from 'clsx'
import withStyles from '../styles/withStyles'
import MuiTablePagination from '@material-ui/core/TablePagination'

export const styles = theme => ({
  actions: {
    display   : 'flex',
    marginLeft: -90
  },
  backIcon: {
    color      : theme.palette.grey[700],
    fontSize   : 18,
    marginRight: 50
  },
  caption: {
    color   : theme.palette.grey[700],
    fontSize: 12
  },
  input: {
    color: theme.palette.grey[700]
  },
  nextIcon: {
    color: theme.palette.grey[700]
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
    '&:active': {
      borderRadius: 4
    },
    marginRight: 38
  }
})

const TablePagination = React.forwardRef(function TablePagination({ ...props }) {
  const {
    classes,
    backIconButtonProps,
    ...otherProps
  } = props

  return (<MuiTablePagination
    backIconButtonProps={{
      classes: {
        root: classes.backIcon
      }
    }}
    classes={
      {
        actions   : classes.actions,
        caption   : classes.caption,
        input     : classes.input,
        select    : classes.select,
        selectIcon: classes.selectIcon,
        selectRoot: classes.selectRoot
      }
    }
    labelDisplayedRows={({ from, to }) => `${from}/${to}`}
    // ActionsComponent={}
    nextIconButtonProps={{
      classes: {
        root: classes.nextIcon
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
