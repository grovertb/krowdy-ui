import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import { Typography, Card, CardHeader, Avatar } from '@krowdy-ui/core'

export const styles = (theme) => ({
  actionContainer: {
    alignItems: 'center',
    display   : 'flex'
  },
  actionHoverableContainer: {
    display    : 'none',
    marginRight: 8
  },
  avatar: {
    border  : `1px solid ${theme.palette.grey[400]}`,
    fontSize: 10,
    height  : 28,
    width   : 28
  },
  container: {
    alignItems: 'center',
    display   : 'flex'
  },
  fullName: {
    cursor         : 'default',
    overflow       : 'hidden',
    'text-overflow': 'ellipsis',
    'white-space'  : 'nowrap',
    width          : 132
  },
  header: {
    padding: 8
  },
  headerAction: {
    marginTop: 1
  },
  leftContainer: {
    fontSize   : 10,
    marginRight: 6,
    maxWidth   : 12,
    minWidth   : 12,
    width      : 12
  },
  rightContainer: {
    flex: 1
  },
  root: {
    '&:hover': {
      '& $actionHoverableContainer': {
        display: 'block'
      }
    },
    borderRadius: 8
  }
})

const CardCandidateRanking = ({
  lastName = '',
  firstName = '',
  photo,
  classes,
  action,
  actionHoverable,
  position,
  paddingLeft
}) => {
  const Container = position || paddingLeft ?
    ({ children }) => (
      <div className={classes.container}>
        <Typography className={classes.leftContainer}>{ !paddingLeft && position }</Typography>
        <div className={classes.rightContainer}>{children}</div></div>
    ):
    ({ children }) =>
      <>{children}</>

  return (
    <Container>
      <Card
        className={classes.root}
        hoverable
        variant='outlined'>
        <CardHeader
          action={(
            <div className={classes.actionContainer}>
              <div className={classes.actionHoverableContainer}>{actionHoverable}</div>{action}
            </div>
          )}
          avatar={<Avatar alt='Remy Sharp' className={classes.avatar} src={photo}>{!photo && `${firstName[0]} ${lastName[0]}`}</Avatar>}
          classes={{ action: classes.headerAction }}
          className={classes.header}
          title={
            <Typography component='span' >
              {firstName} {lastName}
            </Typography >
          }
          titleTypographyProps={{ className: classes.fullName }} />
      </Card>
    </Container>
  )
}

CardCandidateRanking.propTypes = {
  action         : PropTypes.node,
  actionHoverable: PropTypes.node,
  classes        : PropTypes.object,
  firstName      : PropTypes.string,
  lastName       : PropTypes.string,
  paddingLeft    : PropTypes.bool,
  photo          : PropTypes.string,
  position       : PropTypes.number
}

CardCandidateRanking.muiName = 'CardCandidateRanking'

export default withStyles(styles, { name: 'CardCandidateRanking' })(CardCandidateRanking)
