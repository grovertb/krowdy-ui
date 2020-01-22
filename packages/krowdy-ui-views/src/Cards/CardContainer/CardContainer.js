import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import {
  Card,
  CardHeader,
  CardContent,
} from '@krowdy-ui/core'

export const styles = theme => ({
  action: {
    margin: 0
  },
  cardContent: {
    '&:last-child': {
      paddingBottom: 0
    },
    align: 'left',
    color: theme.palette.grey['700'],
    margin: theme.spacing(1, 0, 0, 0),
    padding: 0
  },
  displayHover: {
    '&:hover': {
      border: `1px solid ${theme.palette.primary[500]}`,
      boxShadow: '0px 4px 5px rgba(0, 39, 102, 0.08), 0px 3px 14px rgba(0, 39, 102, 0.04), 0px 8px 10px rgba(0, 39, 102, 0.05)'
    }
  },
  icon: {
    margin: theme.spacing(0, 1, 0, 5)
  },
  lessStyle: {
    margin: 0,
    padding: 0,
  },
  root: {
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: 8,
    boxShadow: 'none',
    cursor: 'pointer',
    fontSize: 14,
    height: 'auto',
  },
  sizePaddingmiddle: {
    padding: 20
  },
  sizePaddingsmall: {
    padding: 12
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
})

const CardContainer = props => {
  const {
    avatar,
    classes,
    content = '',
    title = '',
    cardProps,
    cardContentProps,
    cardHeaderProps,
    disabledHover = false,
    action,
    sizePadding = 'middle',
    onClick = () => { }
  } = props


  return (
    <Card classes={{
      root: clsx(classes.lessStyle, { [classes.displayHover]: !disabledHover }, classes[`sizePadding${sizePadding}`], classes.root)
    }}
      raised
      onClick={onClick}
      {...cardProps} >
      <CardHeader
        avatar={avatar}
        title={title}
        action={action}
        classes={{ action: classes.action, root: clsx(classes.lessStyle, classes.header), title: classes.title }}
        {...cardHeaderProps}
      />
      <CardContent
        classes={{ root: classes.cardContent }}
        {...cardContentProps}
      >
        {content}
      </CardContent>
    </Card>
  )
}

CardContainer.propTypes = {
  action: PropTypes.node,
  avatar: PropTypes.node,
  cardContentProps: PropTypes.object,
  cardHeaderProps: PropTypes.object,
  cardProps: PropTypes.object,
  classes: PropTypes.shape({
    cardContent: PropTypes.string,
    header: PropTypes.string,
    root: PropTypes.string,
    title: PropTypes.string,
  }),
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  disabledHover: PropTypes.bool,
  onClick: PropTypes.func,
  sizePadding: PropTypes.oneOf(['small', 'middle']),
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

CardContainer.muiName = 'CardContainer'

export default withStyles(styles, { name: 'KrowdyCardContainer' })(CardContainer)