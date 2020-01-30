import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import {
  Card,
  CardHeader,
  CardContent
} from '@krowdy-ui/core'

export const styles = theme => ({
  action: {
    margin: 0
  },
  cardContent: {
    '&:last-child': {
      paddingBottom: 0
    },
    align  : 'left',
    color  : theme.palette.grey[700],
    margin : theme.spacing(1, 0, 0, 0),
    padding: 0
  },
  displayHover: {
    '&:hover': {
      border   : `1px solid ${theme.palette.primary[500]}`,
      boxShadow: `${theme.spacing(0, 0.5, 0.6)}  rgba(0, 39, 102, 0.08), ${theme.spacing(0, 0.4, 1.75)} rgba(0, 39, 102, 0.04),  ${theme.spacing(0, 1, 1.25)} rgba(0, 39, 102, 0.05)`
    }
  },
  icon: {
    margin: theme.spacing(0, 1, 0, 5)
  },
  lessStyle: {
    margin : 0,
    padding: 0
  },
  root: {
    border      : `1px solid ${theme.palette.grey[300]}`,
    borderRadius: 8,
    boxShadow   : 'none',
    cursor      : 'pointer',
    fontSize    : 14,
    height      : 'auto'
  },
  sizePaddingmiddle: {
    padding: 20
  },
  sizePaddingsmall: {
    padding: 12
  },
  title: {
    fontSize  : 14,
    fontWeight: 'bold'
  }
})

const CardContainer = props => {
  const {
    avatar,
    classes,
    content = '',
    title = '',
    cardHeaderProps,
    disabledHover = false,
    action,
    sizePadding = 'middle',
    onClick = () => { }
  } = props

  return (
    <Card
      classes={{
        root: clsx(classes.lessStyle,
          { [classes.displayHover]: !disabledHover },
          classes[`sizePadding${sizePadding}`],
          classes.root)
      }}
      onClick={onClick}
      raised>
      {(title || action || avatar) &&
        <CardHeader
          action={action}
          avatar={avatar}
          classes={{ action: classes.action, root: clsx(classes.lessStyle, classes.header), title: classes.title }}
          title={title}
          {...cardHeaderProps} />}

      <CardContent classes={{ root: classes.cardContent }}>
        {content}
      </CardContent>
    </Card>
  )
}

CardContainer.propTypes = {
  action         : PropTypes.node,
  avatar         : PropTypes.node,
  cardHeaderProps: PropTypes.object,
  classes        : PropTypes.shape({
    action     : PropTypes.string,
    cardContent: PropTypes.string,
    header     : PropTypes.string,
    root       : PropTypes.string,
    title      : PropTypes.string
  }),
  content      : PropTypes.oneOfType([ PropTypes.node, PropTypes.string ]),
  disabledHover: PropTypes.bool,
  onClick      : PropTypes.func,
  sizePadding  : PropTypes.oneOf([ 'small', 'middle' ]),
  title        : PropTypes.oneOfType([ PropTypes.node, PropTypes.string ])
}

CardContainer.muiName = 'CardContainer'

export default withStyles(styles, { name: 'KrowdyCardContainer' })(CardContainer)
