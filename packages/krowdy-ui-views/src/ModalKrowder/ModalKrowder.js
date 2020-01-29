import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import {
  Modal,
  Backdrop,
  Card,
  CardContent,
  Typography,
  CardHeader,
  IconButton,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@krowdy-ui/core'
import { AvatarUser } from '@krowdy-ui/views'
import {
  ExpandMore as ExpandMoreIcon,
  Close as CloseIcon,
  Delete as DeleteIcon,
  PauseCircleOutline as PauseCircleOutlineIcon
} from '@material-ui/icons'

export const styles = theme => ({
  collapsesContent: {
    height: 'calc(100% - 160px)'
  },
  expandHeader: {
    background: theme.palette.grey[50],
    border    : `1px solid ${theme.palette.grey[100]}`,
    height    : 40,
    minHeight : 40
  },
  expandHeaderTitle: {
    color     : theme.palette.grey[900],
    fontSize  : '0.875rem',
    fontWeight: 'bold'
  },
  expandIcon: {
    color: theme.palette.primary.main
  },
  expandItem: {
    '&$expandedItem': {
      margin: 0
    },
    '&:before': {
      content: 'none'
    },
    boxShadow: 'none'
  },
  expandedItem: {},
  headerAvatar: {
    marginRight: theme.spacing(2)
  },
  headerProfile: {
    display: 'flex'
  },
  headerProfileContent: {
    display       : 'flex',
    justifyContent: 'space-between',
    padding       : theme.spacing(2, 0)
  },
  headerProfileName: {
    alignItems    : 'center',
    border        : `solid 2px ${theme.palette.primary.main}`,
    borderRadius  : '50%',
    display       : 'flex',
    height        : 48,
    justifyContent: 'center',
    marginRight   : 12,
    width         : 48
  },
  iconProfileActionDelete: {
    // color: theme.palette.error.main,
    cursor  : 'pointer',
    fontSize: '1.125rem'
  },
  iconProfileActionPause: {
    // color: theme.palette.primary.main,
    cursor  : 'pointer',
    fontSize: '1.125rem'
  },
  krowderAvatar: {
    border     : `solid 2px ${theme.palette.primary.main}`,
    height     : 48,
    marginRight: 12,
    width      : 48
  },
  krowderEmail: {
    color       : theme.palette.grey[700],
    fontSize    : '0.75rem',
    marginBottom: 4
  },
  krowderName: {
    color       : theme.palette.grey[800],
    fontSize    : '1.125rem',
    fontWeight  : 'bold',
    marginBottom: 4
  },
  krowderPhone: {
    color   : theme.palette.grey[700],
    /* Gray/700 */
    fontSize: '0.75rem'
  },
  modal: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'center'
  }
})

function ModalKrowder(props) {
  const {
    open,
    onclose,
    user = {},
    onsuspend,
    ondelete,
    collapses = [],
    classes
  } = props

  return (
    <Modal
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
      className={classes.modal}
      closeAfterTransition
      disableAutoFocus={true}
      onClose={onclose}
      open={open}>
      <>
        <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton aria-label='settings' onClick={onclose}>
                <CloseIcon />
              </IconButton>
            }
            title='Editar Krowder' />
          <CardContent>
            {/* profile */}
            <div className={classes.headerProfileContent}>
              <div className={classes.headerProfile}>
                <div className={classes.headerAvatar}>
                  <AvatarUser user={user} />
                </div>
                <div>
                  <Typography className={classes.krowderName}>{user.firstName} {user.lastName}</Typography>
                  <Typography className={classes.krowderEmail}>{user.email}</Typography>
                  <Typography className={classes.krowderPhone}>{user.phone}</Typography>
                </div>
              </div>
              <div className={classes.headerProfileActions}>
                {
                  onsuspend ?
                    <IconButton color='primary' onClick={onsuspend} tooltip='Suspender'>
                      <PauseCircleOutlineIcon
                        className={classes.iconProfileActionPause} />
                    </IconButton> : null
                }
                {
                  ondelete ?
                    <IconButton color='error' onClick={ondelete} tooltip='Eliminar'>
                      <DeleteIcon
                        className={classes.iconProfileActionDelete} />
                    </IconButton> : null
                }
              </div>
            </div>
            {/* collapses */}
            <div className={classes.collapsesContent}>
              {
                collapses.length ?
                  collapses.map((item, n) => (
                    <ExpansionPanel
                      classes={{
                        expanded: classes.expandedItem
                      }}
                      className={classes.expandItem} key={n}>
                      <ExpansionPanelSummary
                        className={classes.expandHeader}
                        expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}>
                        <Typography className={classes.expandHeaderTitle}>{item.title}</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        {
                          item.component ?
                            item.component : null
                        }
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  )) : null
              }
            </div>
          </CardContent>
        </Card>
      </>
    </Modal>
  )
}

ModalKrowder.propTypes = {
  classes  : PropTypes.object,
  collapses: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.element.isRequired,
      title    : PropTypes.string.isRequired
    })
  ),
  onclose  : PropTypes.func.isRequired,
  ondelete : PropTypes.func,
  onsuspend: PropTypes.func,
  open     : PropTypes.bool.isRequired,
  user     : PropTypes.shape({
    firstName: PropTypes.string,
    lastName : PropTypes.string,
    photo    : PropTypes.string
  })
}

ModalKrowder.muiName = 'ModalKrowder'

export default withStyles(styles, { name: 'ModalKrowder' })(ModalKrowder)
