import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  withStyles
} from '@krowdy-ui/core'
import {
  Done as DoneIcon,
  Domain as DomainIcon
} from '@material-ui/icons'

const styles = theme => ({
  avatar: {
    backgroundColor: theme.palette.secondary[10],
    color          : theme.palette.secondary[200]
  },
  button: ({ width }) => ({
    minWidth: width,
    width   : '100%'
  }),
  dashed: {
    border      : `1px dashed ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius
  },
  'default': {
  },
  gutters: {
    paddingLeft : theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  hover: {
    '&:hover': {
      backgroundColor: theme.palette.primary[10]
    }
  },
  image: {
    color: theme.palette.secondary[200]
  },
  outlined: {
    border      : `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius
  },
  secondary: {
    fontSize: 12
  }
})

const Item = ({ classes, _id, hover, onChange, icon: Icon, title, src, subtitle, selected, rightIcon, variant = 'default', disabled }) => (
  <ListItem
    button
    classes={{
      button: clsx(classes.button, classes[variant],  {
        [classes.hover]: hover
      }),
      gutters: classes.gutters
    }}
    disabled={disabled}
    onClick={onChange ? onChange(_id) : undefined}>
    <ListItemAvatar>
      <Avatar
        alt={title}
        className={classes.avatar}
        src={src}
        variant='rounded'>
        {Icon ? <Icon className={classes.image} /> : <DomainIcon className={classes.image} />}
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      classes={{
        secondary: classes.secondary
      }}
      primary={title}
      secondary={subtitle} />
    {selected ? <DoneIcon color='primary' fontSize='small' /> : null}
    {rightIcon ? rightIcon : null }
  </ListItem>
)

Item.propTypes = {
  _id      : PropTypes.string,
  classes  : PropTypes.object,
  hover    : PropTypes.bool,
  icon     : PropTypes.element,
  onChange : PropTypes.func,
  rightIcon: PropTypes.element,
  selected : PropTypes.bool,
  src      : PropTypes.string,
  subtitle : PropTypes.string,
  title    : PropTypes.string,
  variant  : PropTypes.oneOf([ 'default', 'dashed', 'outlined' ])
}

export default withStyles(styles, { name: 'ListInfo-item' })(Item)
