import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import MuiTablePagination from '@material-ui/core/TablePagination'
import withStyles from '../styles/withStyles'
import Input from '../Input'
import Typography from '../Typography'

export const styles = theme => ({
  actions: {
    display   : 'flex',
    marginLeft: theme.spacing(-10.25)
  },
  backIcon: {
    '& svg': {
      height: 18,
      width : 18
    },
    marginRight: theme.spacing(8.75),
    padding    : 0
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
    padding  : theme.spacing(0.625, 1),
    textAlign: 'center'
  },
  inputBase: {
    margin: theme.spacing(0, 4.25, 0, 1.5)
  },
  inputSelect: {
    padding: theme.spacing(0.625, 0.8)
  },
  menuItem: {
    fontSize: 12
  },
  nextIcon: {
    '& svg': {
      height: 18,
      width : 18
    },
    padding: 0
  },
  rootTextfield: {
    border      : ` 1px solid ${theme.palette.grey[400]}`,
    borderRadius: 4,
    boxSizing   : 'border-box',
    color       : theme.palette.grey[700],
    fontSize    : 12,
    width       : 25
  },
  select: {
    '&:focus': {
      borderRadius: 4
    },
    border      : `1px solid ${theme.palette.grey[400]}`,
    borderRadius: 4,
    boxSizing   : 'border-box',
    width       : 47
  },
  selectIcon: {
    '& svg': {
      height: 18,
      width : 18
    },
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'center'
  },
  selectMenu: {
    fontSize  : 12,
    lineHeight: '14px'
  },
  slash: {
    padding: theme.spacing(0, 0.75)
  },
  totalPages: {
    color    : theme.palette.grey[700],
    fontSize : 12,
    margin   : theme.spacing(0, -10),
    padding  : theme.spacing(0.5, 0.375),
    textAlign: 'center',
    width    : 34
  }
})

const TablePagination = React.forwardRef(function TablePagination({ ...props }, ref) {
  const {
    classes,
    ...otherProps
  } = props

  return (
    <MuiTablePagination
      backIconButtonProps={{
        classes: {
          root: clsx(classes.backIcon, classes.color)
        },
        size: 'small'
      }}
      classes={
        {
          actions : classes.actions,
          caption : clsx(classes.caption, classes.color),
          input   : classes.inputBase,
          menuItem: classes.menuItem
        }
      }
      labelDisplayedRows={({ from, to }) => (
        <div className={classes.box}>
          <Input
            classes={{
              input: clsx(classes.input, classes.color),
              root : classes.rootTextfield
            }}
            disableUnderline
            value={from} />
          <Typography className={classes.slash}>/</Typography>
          <Typography>{to}</Typography>
        </div>
      )}
      nextIconButtonProps={{
        classes: {
          root: clsx(classes.nextIcon, classes.color)
        }
      }}
      ref={ref}
      SelectProps={{
        classes: {
          icon      : classes.selectIcon,
          root      : classes.select,
          selectMenu: classes.selectMenu
        },
        inputProps: {
          classes: {
            root: clsx(classes.inputSelect, classes.color)
          }
        }
      }}
      {...otherProps} />
  )
})

TablePagination.propTypes = {

  /**
   * Props applied to the back arrow [`IconButton`](/api/icon-button/) component.
   */
  SelectProps        : PropTypes.object,
  /**
   * Text label for the back arrow icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  backIconButtonProps: PropTypes.object,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  /**
   * @ignore
   */
  classes            : PropTypes.object.isRequired,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
  /**
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  nextIconButtonProps: PropTypes.object
  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */

}

export default withStyles(styles, { name: 'TablePagination' })(TablePagination)
