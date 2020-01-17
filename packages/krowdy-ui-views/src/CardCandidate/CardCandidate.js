import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { Avatar, Typography, Checkbox, Paper } from '@krowdy-ui/core'

export const styles = theme => ({
  avatar: {
    backgroundColor: theme.palette.primary['contrastText'],
    border: `1px solid ${theme.palette.grey['300']}`,
    color: theme.palette.grey['300'],
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 'normal',
    height: 28,
    lineHeight: '100%',
    textAlign: 'center',
    width: 28
  },
  checkbox: {
    height: 28,
    width: 28
  },
  checked: {
    '& .avatar': {
      display: 'none'
    },
    '& .checkbox-hover': {
      display: 'inline-flex'
    }
  },
  headerLeft: {
    flex: '1'
  },
  labelCandidate: {
    marginLeft: 8,
    width: 300
  },
  name: {
    color: theme.palette.grey['700'],
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal'
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
    border: `1px solid ${theme.palette.grey['400']}`,
    borderRadius: 8,
    boxShadow: 'none',
    boxSizing: 'border-box',
    display: 'flex',
    height: 40,
    marginBottom: 8,
    width: '100%'
  },
  root: {
    '& .checkbox-hover': {
      display: 'none'
    },
    '&:hover': {
      '& .avatar': {
        display: 'none'
      },
      '& .checkbox-hover': {
        display: 'inline-flex'
      }
    },
    marginLeft: 8
  }
})


const CardCandidate = props => {
  const {
    checked,
    id,
    firstName,
    lastName,
    onChangeCheckbox,
    imageAvatar,
    classes
  } = props

  const initials = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`

  return (
    <Paper
      className={classes.paper}
      key={id}
    >
      <div className={`${classes.root} ${checked && classes.checked}`}>
        <Checkbox
          checked={checked}
          className={`${classes.checkbox} checkbox-hover`}
          color='primary'
          onChange={onChangeCheckbox}
        />
        <Avatar
          className={`${classes.avatar} avatar`}
          src={imageAvatar}
        >
          {!imageAvatar ? initials : null}
        </Avatar>
      </div>
      <div className={classes.labelCandidate}>
        <Typography className={classes.name} >
          {firstName} {lastName}
        </Typography>
      </div>
    </Paper>

  )
}

CardCandidate.propTypes = {
  checked: PropTypes.any,
  classes: PropTypes.object,
  firstName: PropTypes.string,
  id: PropTypes.number,
  imageAvatar: PropTypes.node,
  lastName: PropTypes.string,
  onChangeCheckbox: PropTypes.func,
}

CardCandidate.muiName = 'CardCandidate'

export default withStyles(styles, { name: 'KrowdyCardCandidate' })(CardCandidate)