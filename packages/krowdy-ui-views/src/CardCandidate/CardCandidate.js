import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
  Avatar,
  Typography,
  Checkbox,
  Card
} from '@krowdy-ui/core'
import clsx from 'clsx'

export const styles = theme => ({
  avatar: {
    backgroundColor: theme.palette.primary['contrastText'],
    border         : `1px solid ${theme.palette.grey['300']}`,
    color          : theme.palette.grey['600'],
    fontSize       : 10,
    fontStyle      : 'normal',
    fontWeight     : 'normal',
    height         : 28,
    lineHeight     : '100%',
    textAlign      : 'center',
    width          : 28
  },
  card: {
    '&:active': {
      border: `1px solid ${theme.palette.grey['500']}`
    },
    '&:focus': {
      border: `1px solid ${theme.palette.primary['600']}`
    },
    '&:hover': {
      border: `1px solid ${theme.palette.primary['400']}`
    },
    alignItems  : 'center',
    border      : `1px solid ${theme.palette.grey['400']}`,
    borderRadius: 8,
    boxShadow   : 'none',
    boxSizing   : 'border-box',
    display     : 'flex',
    height      : 40,
    marginBottom: theme.spacing(1),
    width       : '100%'
  },
  checkbox: {
    '&:hover': {
      backgroundColor: 'transparent',
      boxShadow      : 'none'
    },
    height: 28,
    width : 28
  },
  checked: {
    '& $avatar': {
      display: 'none'
    },
    '& $checkbox': {
      boxShadow: 'none',
      display  : 'inline-flex'
    }
  },
  labelCandidate: {
    marginLeft: theme.spacing(1)
  },
  name: {
    color     : theme.palette.grey['700'],
    fontSize  : 12,
    fontStyle : 'normal',
    fontWeight: 'normal'
  },
  root: {
    '& $checkbox': {
      display: 'none'
    },
    '&:hover': {
      '& $avatar': {
        display: 'none'
      },
      '& $checkbox': {
        display: 'inline-flex'
      }
    },
    marginLeft: theme.spacing(1)
  }
})

const CardCandidate = ({
  checked,
  id,
  firstName = '',
  lastName = '',
  onChangeCheckbox = () => { },
  src,
  classes,
  ...restPropCard
}) => (
  <Card
    className={classes.card}
    key={id}
    {...restPropCard}>
    <div className={clsx(classes.root, { [classes.checked]: checked })}>
      <Checkbox
        checked={checked}
        className={classes.checkbox}
        color='primary'
        onChange={({ target: { checked } }) => onChangeCheckbox(id, checked)}/>
      <Avatar
        className={classes.avatar}
        src={src}>
        {`${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`}
      </Avatar>
    </div>
    <div className={classes.labelCandidate}>
      <Typography className={classes.name} >
        {firstName} {lastName}
      </Typography>
    </div>
  </Card>

)

CardCandidate.propTypes = {
  checked         : PropTypes.bool,
  classes         : PropTypes.object,
  firstName       : PropTypes.string,
  id              : PropTypes.number,
  lastName        : PropTypes.string,
  onChangeCheckbox: PropTypes.func,
  src             : PropTypes.string
}

CardCandidate.muiName = 'CardCandidate'

export default withStyles(styles, { name: 'KrowdyCardCandidate' })(CardCandidate)
