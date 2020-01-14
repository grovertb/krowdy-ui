import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/core/styles'
import { InputBase, Paper, InputAdornment } from '@krowdy-ui/core'

export const styles = theme => ({
  headerLeft: {
    flex: '1'
  },
  icon: {
    color: theme.palette.grey['600'],
    fontSize: '18px',
    marginRight: '8px'
  },
  inputBase: {
    flex: 1,
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '16px',
    marginLeft: '10px'
  },
  paper: {
    '&:active': {
      border: `1px solid ${theme.palette.grey['500']}`
    },
    '&:focus': {
      border: `1px solid ${theme.palette.primary['600']}`
    },
    '&:hover': {
      border: `1px solid ${theme.palette.primary['400']}`
    },
    alignItems: 'center',
    background: theme.palette.primary['contrastText'],
    border: `1px solid ${theme.palette.grey['400']}`,
    borderRadius: '4px',
    boxShadow: 'none',
    boxSizing: 'border-box',
    display: 'flex',
    height: '40px',
    width: '340px'
  },
})

const Search = props => {
  const {
    classes,
    placeholder,
    searchIcon,
    value,
    onChange,
    onKeyDown
  } = props

  return (
    <Paper className={classes.paper} >
      <InputBase
        placeholder={placeholder}
        value={value}
        onKeyDown={onKeyDown}
        endAdornment={
          <InputAdornment position='end' className={classes.icon} >
            {searchIcon}
          </InputAdornment>}
        onChange={onChange}
        inputProps={{
          'aria-label': 'search'
        }}
        style={{
          marginLeft: '11px',
        }}
        className={classes.inputBase}
      />
    </Paper>

  )
}

Search.propTypes = {
  classes: PropTypes.object,
  onChange: PropTypes.any,
  onKeyDown: PropTypes.any,
  placeholder: PropTypes.string,
  searchIcon: PropTypes.any,
  value: PropTypes.any
}

Search.muiName = 'Search'

export default withStyles(styles, { name: 'KrowdySearch' })(Search)