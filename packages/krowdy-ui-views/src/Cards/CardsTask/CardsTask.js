import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/core/styles'
import clsx from 'clsx'
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
} from '@krowdy-ui/core'
/* import CloseIcon from '@krowdy-ui/icons/Close'
 */
export const styles = theme => ({
  card: {
    fontFamily: 'Roboto',
    width: theme.spacing(40),
  },
  content: {
    align: 'left',
    fontSize: '14px',
    lineHeight: '20px',
    paddingLeft: theme.spacing(3),
    verticalAlign: 'Top',
  },
  header: {
    paddingLeft: theme.spacing(2)
  },
  icon: {
    margin: theme.spacing(0, 1, 0, 5)
  },
  moreButton: {
    'float': 'right'
  },
  next: {
    'float': 'right',
    marginLeft: theme.spacing(3),
  },
})

const CardTask = props => {
  const {
    avatarProps,
    borderColor,
    classes,
    content,
    raised = false,
    iconRight,
    lessShadow,
    title,
    ...others
  } = props


  return (
    <Card
      className={clsx(classes.card)}
      lessShadow={lessShadow}
      borderColor={borderColor}
      raised={raised}
      {...others}
    >
      <CardHeader
        className={classes.header}
        avatar={<Avatar {...avatarProps} />}
        title={
          <div className={classes.title}>
            {title}
          </div>
        }
/*         rightElement={(iconRight) ? <CloseIcon type='close' color={'error'} /> : null}
 */      />
      <CardContent className={classes.content}>{content}</CardContent>
    </Card>
  )
}

CardTask.propTypes = {
  avatar: PropTypes.node,
  avatarProps: PropTypes.object,
  borderColor: PropTypes.oneOf(['light', 'dark', 'krowdy', 'error', 'none']),
  classes: PropTypes.object,
  content: PropTypes.node,
  iconRight: PropTypes.node,
  lessShadow: PropTypes.bool,
  raised: PropTypes.bool,
  title: PropTypes.string.isRequired,
}

CardTask.muiName = 'CardTask'

export default withStyles(styles, { name: 'KrowdyCardTask' })(CardTask)