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
  Close as CloseIcon
} from '@material-ui/icons'

export const styles = theme => ({
  card: {
    display      : 'flex',
    flexDirection: 'column',
    height       : '90%',
    paddingBottom: 30
  },
  cardContentRoot: {
    flex    : 1,
    height  : '100%',
    overflow: 'auto'
  },
  collapsesContent: {
    height: 'calc(100% - 160px)'
  },
  expandContent: {
    height  : '40vh',
    overflow: 'auto'
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
    action,
    onChangeCollapse,
    headerContent,
    collapses = [],
    classes,
    minWidth = 320
  } = props

  const [ expanded, setExpanded ] = React.useState(false)

  const _handleChangeCollapse = panel => (event, isExpanded) => {
    onChangeCollapse({ event, isExpanded, panel })
    setExpanded(isExpanded ? panel : false)
  }

  const _handleOnClose = () => {
    onclose()
    setExpanded(false)
  }

  return (
    <Modal
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
      className={classes.modal}
      closeAfterTransition
      disableAutoFocus={true}
      onClose={_handleOnClose}
      open={open}>
      <>
        <Card className={classes.card} style={{ minWidth: minWidth }}>
          <CardHeader
            action={
              <IconButton aria-label='settings' onClick={_handleOnClose}>
                <CloseIcon />
              </IconButton>
            }
            title='Editar Krowder' />
          <CardContent classes={{
            root: classes.cardContentRoot
          }}>
            {/* profile */}
            <div className={classes.headerProfileContent}>
              <div className={classes.headerProfile}>
                <div className={classes.headerAvatar}>
                  <AvatarUser user={user} />
                </div>
                {headerContent}
              </div>
              <div className={classes.headerProfileActions}>
                {action}
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
                      className={classes.expandItem}
                      expanded={expanded === item.key}
                      key={n}
                      onChange={_handleChangeCollapse(item.key)}>
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
  action   : PropTypes.element,
  classes  : PropTypes.object,
  collapses: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.element.isRequired,
      title    : PropTypes.string.isRequired
    })
  ),
  headerContent   : PropTypes.element,
  minWidth        : PropTypes.number,
  onChangeCollapse: PropTypes.func,
  onclose         : PropTypes.func.isRequired,
  open            : PropTypes.bool.isRequired,
  user            : PropTypes.shape({
    firstName: PropTypes.string,
    lastName : PropTypes.string,
    photo    : PropTypes.string
  })
}

ModalKrowder.muiName = 'ModalKrowder'

export default withStyles(styles, { name: 'ModalKrowder' })(ModalKrowder)
