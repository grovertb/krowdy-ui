import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Avatar, Card, CardContent, CardHeader, Divider, makeStyles, Typography } from '@krowdy-ui/core'

const CardConfig = ({ title = '', subtitle = '', icon, children, action, className }) => {
  const classes = useStyles()

  return (
    <Card
      className={clsx(className, classes.card)}>
      <CardHeader
        action={action}
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            {icon}
          </Avatar>
        }
        className={classes.headerCard}
        subheader={<Typography variant='info1'>{subtitle}</Typography>}
        title={<Typography variant='h5'>{title}</Typography>} />
      <Divider />
      <CardContent className={classes.content}>
        {children}
      </CardContent>
    </Card>
  )
}

CardConfig.propTypes = {
  action   : PropTypes.node,
  className: PropTypes.string,
  icon     : PropTypes.node.isRequired,
  subtitle : PropTypes.string,
  title    : PropTypes.string
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary[500]
  },
  card: {
    border      : `1px solid ${theme.palette.grey[300]}`,
    borderRadius: 2 * theme.shape.borderRadius,
    fontSize    : 14
  },
  content: {
    align  : 'left',
    color  : theme.palette.grey[700],
    height : 'calc(100% - 104px)',
    padding: 0,
    width  : '100%'
  },
  gridCustom: {
    margin: theme.spacing(2.5, 0, 2.5)
  },
  headerCard: {
    padding: theme.spacing(2)
  }
}), { name: 'CardConfig' })

export default CardConfig
