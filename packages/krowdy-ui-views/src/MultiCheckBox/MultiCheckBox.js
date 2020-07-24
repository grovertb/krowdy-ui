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

const MultiCheckBox = ({ options, onChange = () => {}, label, classes }) => {
  const [ anchorEl, setAnchorEl ] = React.useState(null)
  const _handleClick = (event) => options.length && setAnchorEl(event.currentTarget)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const _handleClickOption = (key, checked) => {
    const newOptions = options
      .map((option) => {
        const isSubOptionSelected = option.subOptions.some((subOption) => subOption.key === key)
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

        if(!isSubOptionSelected) return option

        return {
          ...option,
          checked   : false,
          subOptions: option.subOptions.map((subOption) => {
            if(subOption.key !== key) return subOption

            return ({
              ...subOption,
              checked
            })
          })
        }
      })
      .map((option) => option.subOptions.every(({ checked }) => checked) ? { ...option, checked: true }: option)

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
                        onChange={({ target:{ checked } }) => _handleClickOption(option.key, checked)}
                        onClick={(e) => e.stopPropagation()}
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
                              onChange={({ target: { checked } }) => _handleClickOption(subOption.key, checked)}
                              onClick={(e) => e.stopPropagation()}
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
