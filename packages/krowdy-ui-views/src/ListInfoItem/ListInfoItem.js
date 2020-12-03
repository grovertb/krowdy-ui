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
  dashed: {
    border      : `1px dashed ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius
  },
  'default': {
    borderRadius: theme.shape.borderRadius
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
  hoverDefault: {
    '&:hover': {
      '& div:last-child': {
        visibility: 'visible'
      }
    }
  },
  image: {
    color: theme.palette.secondary[200]
  },
  outlined: {
    border      : `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius * 2
  },
  primary: {
  },
  rightIconHover: {
    visibility: 'hidden'
  },
  root: ({ width }) => ({
    width: width || '100%'
  }),
  secondary: {
    fontSize: 12
  },
  variantHover: ({ variantHover }) => ({
    '&:hover': {
      backgroundColor: variantHover ? 'transparent' : undefined,
      border         : variantHover ? `1px solid ${theme.palette.primary[300]}` : undefined
    }
  })
})

const ListInfoItem = ({
  classes, _id, hover, onChange, icon: Icon, title, src,
  subtitle, selected, rightIcon, variant = 'default', disabled,
  primaryTypographyProps, secondaryTypographyProps, rightIconHover, variantHover
}) => (
  <ListItem
    button={onChange}
    classes={{
      button: clsx(classes.root, classes[variant],  {
        [classes.hover]       : hover,
        [classes.hoverDefault]: !hover
      }),
      gutters: classes.gutters,
      root   : clsx(classes.root, classes[variant], {
        [classes.variantHover]: variantHover
      })
    }}
    disabled={disabled}
    onClick={onChange ? onChange(_id) : undefined}>
    <ListItemAvatar>
      <Avatar
        alt={title}
        className={classes.avatar}
        src={src}
        variant={src ? 'circle' : 'rounded'}>
        {Icon ? <Icon className={classes.image} /> : <DomainIcon className={classes.image} />}
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      classes={{
        primary  : classes.primary,
        secondary: classes.secondary
      }}
      primary={title}
      primaryTypographyProps={primaryTypographyProps}
      secondary={subtitle}
      secondaryTypographyProps={secondaryTypographyProps} />
    {selected ? <DoneIcon color='primary' fontSize='small' /> : null}
    <div className={clsx({
      [classes.rightIconHover]: rightIconHover
    })}>
      {rightIcon ? rightIcon : null }
    </div>
  </ListItem>
)

ListInfoItem.propTypes = {
  _id                     : PropTypes.string,
  classes                 : PropTypes.object,
  disabled                : PropTypes.bool,
  hover                   : PropTypes.bool,
  icon                    : PropTypes.element,
  onChange                : PropTypes.func,
  primaryTypographyProps  : PropTypes.object,
  rightIcon               : PropTypes.element,
  rightIconHover          : PropTypes.bool,
  secondaryTypographyProps: PropTypes.object,
  selected                : PropTypes.bool,
  src                     : PropTypes.string,
  subtitle                : PropTypes.string,
  title                   : PropTypes.string,
  variant                 : PropTypes.oneOf([ 'default', 'dashed', 'outlined' ]),
  variantHover            : PropTypes.bool
}

export default withStyles(styles, { name: 'ListInfo-item' })(ListInfoItem)
