import React from 'react'
import { withStyles, Card, CardContent, Avatar } from '@material-ui/core'
import { Person as PersonIcon } from '@material-ui/icons'
import PropTypes from 'prop-types'

export const styles = (theme) => ({
  avatar: {
    alignItems    : 'center',
    border        : `1px solid ${theme.palette.grey[400]}`,
    borderRadius  : '50%',
    display       : 'flex',
    height        : 28,
    justifyContent: 'center',
    width         : 28
  },
  container: {
    '&:last-child': {
      paddingBottom: theme.spacing(1)
    },
    display: 'flex',
    padding: theme.spacing(1)
  },
  content: {
    flex      : 1,
    marginLeft: theme.spacing(1)
  },
  list: {
    display            : 'grid',
    gap                : '4px',
    gridTemplateColumns: '1fr 1fr',
    marginTop          : theme.spacing(.5)
  },
  personIcon: {
    fontSize: 13
  },
  root    : {},
  subtitle: {
    fontWeight: 500,
    margin    : theme.spacing(1, 0)
  }
})

const Referent = ({
  classes,
  children,
  header
}) => (
  <Card className={classes.root} variant='outlined'>
    <CardContent className={classes.container}>
      <Avatar className={classes.avatar}>
        <PersonIcon className={classes.personIcon} />
      </Avatar>
      <div className={classes.content}>
        {header}
        <div className={classes.list}>
          {children}
        </div>
      </div>
    </CardContent>
  </Card>
)

Referent.propTypes = {
  children: PropTypes.element,
  classes : PropTypes.object,
  header  : PropTypes.node
}

export default withStyles(styles, { name: 'Referent' })(Referent)
