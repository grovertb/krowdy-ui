import React from 'react'
// import PropTypes from 'prop-types'
import clsx from 'clsx'
import withStyles from '../styles/withStyles'
import MuiTablePagination from '@material-ui/core/TablePagination'
import { TextField, Box } from '@krowdy-ui/core'

export const styles = theme => ({
  actions: {
    display   : 'flex',
    marginLeft: -90
  },
  backIcon: {
    fontSize   : 18,
    marginRight: 28
  },
  box: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'center'
  },
  caption: {
    fontSize: 12
  },
  color: {
    color: theme.palette.grey[700]
  },
  input: {

  },
  inputTextfield: {
    color   : '#595959',
    fontSize: 12
  },
  nextIcon: {

  },
  rootTextfield: {
    width: 25

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
  },
  totalPages: {
    color    : '#595959',
    fontSize : 12,
    margin   : '0px -10px 0px 0px',
    padding  : '4px 3px',
    textAlign: 'center',
    width    : 34
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
    labelDisplayedRows={({ from, to }) => (
      <Box className={classes.box}>
        <TextField
          classes={{ root: classes.rootTextfield }}
          InputProps={{ classes: { input: classes.inputTextfield } }}
          value={from} />
        <span>/</span>
        <span>{to}</span>
      </Box>

      //  `${from}/${to}`
    )
    }
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
