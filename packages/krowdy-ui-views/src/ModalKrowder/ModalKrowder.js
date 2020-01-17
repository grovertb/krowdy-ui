import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@krowdy-ui/styles'
import {
  Modal,
  Backdrop,
  Grow,
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CloseIcon from '@material-ui/icons/Close'
import DeleteIcon from '@material-ui/icons/Delete'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'

const useStyles = makeStyles(theme => ({
  expandHeader: {
    '&.Mui-expanded': {
      height: '40px',
      minHeight: '40px',
    },
    background: '#F5F5F5',
    border: '1px solid #EAEAEA',
    height: '40px',
    minHeight: '40px'
  },
  expandHeaderTitle: {
    color: '#262626',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  expandIcon: {
    color: theme.palette.primary.main
  },
  expandItem: {
    '&.Mui-expanded': {
      margin: '0'
    },
    '&:before': {
      content: 'none'
    },
    boxShadow: 'none'
  },
  headerProfile: {
    display: 'flex',
  },
  headerProfileContent: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 0'
  },
  headerProfileName: {
    alignItems: 'center',
    border: `solid 2px ${theme.palette.primary.main}`,
    borderRadius: '50%',
    display: 'flex',
    height: '48px',
    justifyContent: 'center',
    marginRight: '0.75rem',
    width: '48px'
  },
  iconProfileActionDelete: {
    color: '#FF4053',
    cursor: 'pointer',
    fontSize: '1.125rem',
    // marginLeft: '10px'

  },
  iconProfileActionPause: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
    fontSize: '1.125rem'
  },
  krowderAvatar:{
    border: `solid 2px ${theme.palette.primary.main}`,
    height: '48px',
    marginRight: '0.75rem',
    width: '48px'
  },
  krowderEmail: {
    color: '#595959',
    fontSize: '0.75rem',
    marginBottom: '4px'
  },
  krowderName: {
    color: '#262626',
    fontSize: '1.125rem',
    fontWeight: 'bold',
    marginBottom: '4px'
  },
  krowderPhone: {
    color: '#595959',
    /* Gray/700 */
    fontSize: '0.75rem'
  },
  modal: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}), { name: 'ModalKrowder' })

function ModalKrowder (props) {
  const {
    open,
    onclose,
    user,
    onsuspend,
    ondelete,
    collapses
  } = props

  const classes = useStyles()

  return (
    <Modal
        className={classes.modal}
        open={true}
        onClose={onclose}
        closeAfterTransition
        disableAutoFocus={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Grow in={true}>
          <Card className={classes.card}>
          <CardHeader
              action={
                <IconButton aria-label='settings' onClick={onclose}>
                  <CloseIcon />
                </IconButton>
              }
              title='Editar Krowder'
            />
            <CardContent>
              {/* profile */}
             <div className={classes.headerProfileContent}>
               <div className={classes.headerProfile}>
                 <AvatarUser user={user} />
                  <div>
                    <Typography className={classes.krowderName}>{user.firstName} {user.lastName}</Typography>
                    <Typography className={classes.krowderEmail}>{user.email}</Typography>
                    <Typography className={classes.krowderPhone}>{user.phone}</Typography>
                  </div>
               </div>
               <div className={classes.headerProfileActions}>
                 <IconButton tooltip='Suspender' onClick={onsuspend}>
                  <PauseCircleOutlineIcon
                    className={classes.iconProfileActionPause} />
                 </IconButton>
                 <IconButton tooltip='Eliminar' onClick={ondelete}>
                  <DeleteIcon
                  className={classes.iconProfileActionDelete} />
                 </IconButton>
               </div>
             </div>
             {/* collapses */}
             {
               collapses.length ?
                collapses.map((item, n) => (
                  <ExpansionPanel key={n} className={classes.expandItem}>
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
            </CardContent>
          </Card>
        </Grow>
      </Modal>
  )
}

ModalKrowder.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
}

ModalKrowder.muiName = 'ModalKrowder'

export default ModalKrowder