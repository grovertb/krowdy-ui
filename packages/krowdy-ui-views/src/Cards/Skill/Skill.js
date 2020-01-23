import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@krowdy-ui/styles'
import clsx from 'clsx'
import { Button, ExpansionPanel, ExpansionPanelSummary, Grid, ExpansionPanelDetails, Typography } from '@material-ui/core'
import { AudioRecorder } from '../../index'

export const styles = theme => ({
  alignSelf: {
    alignSelf: 'flex-start'
  },
  button: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    margin  : 0,
    minWidth: 0,
    padding : 0
  },
  defaultColor: {
    backgroundColor: '#F2F4F7'
  },
  heading: {
    fontWeight: 'bold'
  },
  iconDragContainer: {
    color: theme.palette.grey[500]
  },
  inputContent: {
    display: 'flex',
    flex   : 1,
    margin : '0 8px'
  },
  marginBottomStandar: {
    margin: '0 0 12px 0'
  },
  margins: {
    padding      : '0 12px',
    verticalAlign: 'center'
  },
  paddingLess: {
    padding: 0
  },
  root: {
    fontFamily: 'Roboto'
  },
  size: {
    fontSize : 14,
    minHeight: 32
  }
})

const CardUser = props => {
  const {
    classes,
    content,
    color = 'defaultColor',
    iconRemove,
    iconDrag,
    id,
    expandIcon,
    onChange = () => { },
    onDeleteItem = () => { },
    title
  } = props

  return (
    <div className={classes.root} id={id}>
      <Grid
        alignItems='center'
        container
        justify='space-between'
        tabIndex='-1'>
        <Grid className={clsx(classes.iconDragContainer, classes.top)} item key='drag-icon'>
          {(iconDrag) ? iconDrag : null}
        </Grid>
        <Grid className={classes.inputContent} item key='expand-section' >
          <ExpansionPanel classes={{ root: clsx(classes[color], classes.margins) }} onChange={onChange}>
            <ExpansionPanelSummary
              classes={{ root: classes.paddingLess }}
              expandIcon={expandIcon ? expandIcon : null}
              id='panel1a-header'>
              <Typography className={clsx(classes.heading, classes.size)} component='div'>{(title) ? title : null}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails classes={{ root: clsx(classes.paddingLess, classes.marginBottomStandar) }}>
              <Typography className={clsx(classes.content, classes.size)} component='div'>
                {(content) ? content : null}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
        <Grid className={clsx(classes.alignSelf, classes.paddingLess)} item>
          {(iconRemove) ? <Button
            className={classes.button}
            key='btn-delete'
            onClick={onDeleteItem}>{iconRemove}</Button> : null}
        </Grid>
      </Grid>

      <AudioRecorder />
    </div >)
}

CardUser.propTypes = {
  classes     : PropTypes.object,
  color       : PropTypes.oneOf([ 'defaultColor' ]),
  content     : PropTypes.oneOfType([ PropTypes.node, PropTypes.string ]),
  expandIcon  : PropTypes.node,
  iconDrag    : PropTypes.node,
  iconRemove  : PropTypes.node,
  id          : PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  onChange    : PropTypes.func,
  onDeleteItem: PropTypes.func,
  title       : PropTypes.oneOfType([ PropTypes.node, PropTypes.string ]).isRequired
}

CardUser.muiName = 'CardUser'

export default withStyles(styles, { name: 'KrowdyCardUser' })(CardUser)
