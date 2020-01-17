import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { Avatar, Typography, Checkbox, Paper } from '@krowdy-ui/core'

export const styles = theme => ({
  avatar: {
    backgroundColor: '#FFFFFF',
    border         : '1px solid #E8E8E8',
    color          : '#8C8C8C',
    fontSize       : 10,
    fontStyle      : 'normal',
    fontWeight     : 'normal',
    height         : 28,
    lineHeight     : '100%',
    textAlign      : 'center',
    width          : 28
  },
  checkbox: {
    height: 28,
    width : 28
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
    width     : 300
  },
  name: {
    color     : theme.palette.grey['700'],
    fontSize  : 12,
    fontStyle : 'normal',
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
    alignItems    : 'center',
    border        : `1px solid ${theme.palette.grey['400']}`,
    borderRadius  : 8,
    boxShadow     : 'none',
    boxSizing     : 'border-box',
    display       : 'flex',
    height        : 40,
    justifyContent: 'space-between',
    marginBottom  : 8,
    width         : '100%'
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
    marginLeft         : 8
  }
})

const CardCandidate = props => {
  const {
    checked,
    _id,
    firstName,
    lastName,
    onChangeCheckbox = () => {},
    imageAvatar,
    classes
  } = props
  const initials = `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`

  return (
    <Paper
      className={classes.paper}
      key={_id}>
      <div className={`${classes.root} ${checked && classes.checked}`}>
        <Checkbox
          checked={checked}
          className={`${classes.checkbox} checkbox-hover`}
          color='primary'
          onChange={({ target: { checked } }) => onChangeCheckbox(_id,checked)} />
        <Avatar
          className={`${classes.avatar} avatar`}
          src={imageAvatar}>
          {initials}
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
  _id             : PropTypes.number,
  checked         : PropTypes.any,
  classes         : PropTypes.object,
  firstName       : PropTypes.string,
  imageAvatar     : PropTypes.node,
  lastName        : PropTypes.string,
  onChangeCheckbox: PropTypes.any
}

CardCandidate.muiName = 'CardCandidate'

export default withStyles(styles, { name: 'KrowdyCardCandidate' })(CardCandidate)
