import React from 'react'
import {
  Typography,
  Popover,
  Checkbox,
  Paper,
  withStyles
} from '@krowdy-ui/core'
import { TreeView, TreeItem } from '@material-ui/lab'
import { ArrowDropDown as ArrowDropDownIcon, ArrowDropUp as ArrowDropUpIcon } from '@material-ui/icons'
import clsx from 'clsx'
import PropTypes from 'prop-types'

export const styles = {
  containerPaper: {
    padding: 12,
    width  : 300
  },
  flex: {
    alignItems: 'center',
    display   : 'flex'
  },
  pointer: {
    cursor: 'pointer'
  }
}

const MultiCheckBox = ({ options, onChange = () => {}, label, classes, expandAllDefault }) => {
  const [ anchorEl, setAnchorEl ] = React.useState(null)
  const _handleClick = (event) => options.length && setAnchorEl(event.currentTarget)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const _handleClickCheckBox = (e) => e.stopPropagation()

  const _handleClickOption = (key) => ({ target: { checked } }) => {
    const newOptions = options
      .map((option) => {
        const isOptionSelected = option.key === key
        if(isOptionSelected)
          return ({
            ...option,
            checked,
            subOptions: option.subOptions.map((subOption) => ({
              ...subOption,
              checked
            }))
          })

        const isSubOptionSelected = option.subOptions.some((subOption) => subOption.key === key)
        if(!isSubOptionSelected) return option

        const newSubOptions = option.subOptions.map((subOption) => {
          if(subOption.key !== key) return subOption

          return ({
            ...subOption,
            checked
          })
        })

        return {
          ...option,
          checked   : newSubOptions.every(({ checked }) => checked),
          subOptions: newSubOptions
        }
      })

    onChange(newOptions)
  }

  return (
    <div className={classes.root}>
      <div className={clsx(classes.flex, classes.pointer)} onClick={_handleClick}>
        <Typography variant='h6'>{label}</Typography>
        <ArrowDropDownIcon />
      </div>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        onClose={handleClose}
        open={open}
        transformOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
        <Paper className={classes.containerPaper}>
          <TreeView
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpanded={expandAllDefault ? options.map(({ key }) => key): undefined}
            defaultExpandIcon={<ArrowDropUpIcon />}>
            {options.map((option) => {
              const { key, subOptions, label } = option

              return (
                <TreeItem
                  key={key}
                  label={(
                    <div className={classes.flex}>
                      <Checkbox
                        checked={option.checked}
                        color='primary'
                        onChange={_handleClickOption(option.key)}
                        onClick={_handleClickCheckBox}
                        size='small' />
                      <Typography variant='h6'>{label}</Typography>
                    </div>
                  )}
                  nodeId={key}>
                  {subOptions && subOptions.map((subOption) => {
                    const { key, label }  = subOption

                    return (
                      <TreeItem
                        key={key}
                        label={(
                          <div className={classes.flex}>
                            <Checkbox
                              checked={subOption.checked}
                              color='primary'
                              onChange={_handleClickOption(subOption.key)}
                              onClick={_handleClickCheckBox}
                              size='small' />
                            <Typography>{label}</Typography>
                          </div>
                        )}
                        nodeId={key} />
                    )
                  })}
                </TreeItem>
              )
            })}
          </TreeView>
        </Paper>
      </Popover>
    </div>
  )
}

MultiCheckBox.propTypes = {
  classes : PropTypes.object,
  label   : PropTypes.string,
  onChange: PropTypes.func,
  options : PropTypes.arrayOf(PropTypes.shape({
    checked   : PropTypes.bool,
    key       : PropTypes.string,
    label     : PropTypes.string,
    subOptions: PropTypes.arrayOf(PropTypes.shape({
      checked: PropTypes.bool,
      key    : PropTypes.string,
      label  : PropTypes.string
    }))
  }))
}

export default withStyles(styles, { name: 'MultiCheckBox' })(MultiCheckBox)
