import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@krowdy-ui/core/styles'
import {
  Modal,
  Backdrop,
  Grow,
  Box
} from '@krowdy-ui/core'

const useStyles = makeStyles(theme => ({
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
  },
}), { name: 'FilterContent' })

const ModalKrowder = props => {
  const {
    open,
  } = props

  const classes = useStyles()

  return (
    <Modal
        className={classes.modal}
        open={true}
        // onClose={handleClose}
        closeAfterTransition
        disableAutoFocus={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Grow in={true}>
          <Box className={classes.paper}>
            <h2 className={classes.paper}>Transition modal</h2>
            <p id='transition-modal-description'>react-transition-group animates me.</p>
          </Box>
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