import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import { CardHeader } from '@krowdy-ui/core'

export const styles = theme => ({
  action: {
    margin: 0
  },
  borderDefault: {
    borderRadius: theme.spacing(1, 1, 0, 0),
    minHeight   : 40,
    outline     : `1px solid ${theme.palette.grey[300]}`,
    padding     : theme.spacing(1.25, 2.5)
  },
  header: {
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    right   : 10
  },
  lessStyle: {
    margin : 0,
    padding: 0
  },
  shadow: {
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.05)'
  },
  sizePaddingmiddle: {
    padding: theme.spacing(1.5, 2.5)
  },
  sizePaddingsmall: {
    padding: theme.spacing(1, 1.5)
  },
  title: {
    fontSize  : 14,
    fontWeight: 'bold'
  }
})

const HeaderCard = props => {
  const {
    avatar,
    classes,
    title = '',
    cardHeaderProps,
    sizePadding = 'middle',
    action,
    shadow
  } = props

  return (
    <CardHeader
      action={action}
      avatar={avatar}
      classes={{ action: clsx(classes.action, classes.icon), root: classes.header, title: classes.title }}
      className={clsx(classes.borderDefault, classes[`sizePadding${sizePadding}`], { [classes.shadow]: shadow })}
      title={title}
      {...cardHeaderProps} />
  )
}

HeaderCard.propTypes = {
  action         : PropTypes.node,
  avatar         : PropTypes.node,
  cardHeaderProps: PropTypes.object,
  classes        : PropTypes.shape({
    action: PropTypes.string,
    header: PropTypes.string,
    title : PropTypes.string
  }),
  content      : PropTypes.oneOfType([ PropTypes.node, PropTypes.string ]),
  disabledHover: PropTypes.bool,
  onClick      : PropTypes.func,
  sizePadding  : PropTypes.oneOf([ 'small', 'middle' ]),
  title        : PropTypes.oneOfType([ PropTypes.node, PropTypes.string ])
}

HeaderCard.muiName = 'HeaderCard'

export default withStyles(styles, { name: 'KrowdyHeaderCard' })(HeaderCard)
