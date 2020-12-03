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
  color: ({ iconColor }) => ({
    backgroundColor: iconColor || 'transparent'
  }),
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
  large: {
    height: theme.spacing(7),
    width : theme.spacing(7)
  },
  listItemAvatar: {},
  medium        : {

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
  small: {
    height    : theme.spacing(4),
    marginLeft: theme.spacing(.5),
    width     : theme.spacing(4)
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
  primaryTypographyProps, secondaryTypographyProps, rightIconHover,
  variantHover, avatarSize = 'medium'
}) => (
  <ListItem
    button={Boolean(onChange)}
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
    <ListItemAvatar classes={{
      root: classes.listItemAvatar
    }}>
      <Avatar
        alt={title}
        className={clsx(classes.avatar, classes[avatarSize], {
          [classes.color]: src
        })}
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
  avatarSize              : PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  classes                 : PropTypes.object,
  disabled                : PropTypes.bool,
  hover                   : PropTypes.bool,
  icon                    : PropTypes.element,
  iconColor               : PropTypes.string,
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
  variantHover            : PropTypes.bool,
  width                   : PropTypes.number
}

export default withStyles(styles, { name: 'ListInfo-item' })(ListInfoItem)
