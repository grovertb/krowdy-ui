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
    headerContent,
    collapses = [],
    classes
  } = props

  const [ expanded, setExpanded ] = React.useState(false)

  const _handleChangeCollapse = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
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
                      expanded={expanded === `panel-${n}`}
                      key={n} onChange={_handleChangeCollapse(`panel-${n}`)}>
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
  headerContent: PropTypes.element,
  onclose      : PropTypes.func.isRequired,
  open         : PropTypes.bool.isRequired,
  user         : PropTypes.shape({
    firstName: PropTypes.string,
    lastName : PropTypes.string,
    photo    : PropTypes.string
  })
}

ModalKrowder.muiName = 'ModalKrowder'

export default withStyles(styles, { name: 'ModalKrowder' })(ModalKrowder)
